"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
import TestButton from "./TestButton";
import CourseHeader from "./CourseHeader";
import ChatBotModal from "./ChatBotModal";
import axiosInstance from '@/utils/axiosInstance';
import PlayCircle from '@mui/icons-material/PlayCircleRounded';

interface CoursePost {
  id: number;
  content: string;
  file: string;
  created_at: string;
  iframe: string;
}

interface CourseData {
  id: number;
  name: string;
  image: string;
}
interface CachedCourse {
  id: number;
  name: string;
  image: string;
}

const formatTime = (str: string) => {
  if (!str) return "";

  const utcDate = new Date(str);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = utcDate.toLocaleString("fa-IR", { timeZone: userTimezone });

  if (!localDate.includes(",")) return "";

  const [datePart, timePart] = localDate.split(", ");
  if (!datePart || !timePart) return "";

  const [year, month, day] = datePart
    .split("/")
    .map((part) => part.padStart(2, "۰"));
  const [hour, minutes, seconds] = timePart
    .split(":")
    .map((part) => part.padStart(2, "۰"));

  return `${hour}:${minutes}:${seconds} - ${year}/${month}/${day}`;
};

export default function CourseContent({ id }: { id: string }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [posts, setPosts] = useState<CoursePost[]>(() => {
    if (typeof window !== 'undefined') {
      const cachedPosts = localStorage.getItem(`course_posts_${id}`);
      return cachedPosts ? JSON.parse(cachedPosts) : [];
    }
    return [];
  });
  const [courseInfo, setCourseInfo] = useState<CourseData>({
    id: Number(id),
    name: "",
    image: "",
  });
  const router = useRouter();


  useEffect(() => {
    // Get course info from localStorage
    const cachedCourses = localStorage.getItem("courses");
    if (cachedCourses) {
      const courses = JSON.parse(cachedCourses) as CachedCourse[];
      const currentCourse = courses.find((course) => course.id === Number(id));
      if (currentCourse) {
        setCourseInfo({
          id: currentCourse.id,
          name: currentCourse.name,
          image: "https://test22.liara.run" + currentCourse.image,
        });
      }
    }

    // Fetch posts from API using axiosInstance
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get<CoursePost[]>(
          `/api/channel/channels/${id}/posts/`
        );
        
        if (JSON.stringify(response.data) !== JSON.stringify(posts)) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        router.push('/login');
      }
    };

    fetchPosts();
  }, [id, posts, router]);


  useEffect(() => {
    if (posts.length > 0) {
      const lastViewedPostId = localStorage.getItem(`last_viewed_post_${id}`);
      if (lastViewedPostId) {
        const element = document.querySelector(
          `[data-post-id="${lastViewedPostId}"]`
        );
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 100);
        }
      }
    }
  }, [posts, id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const postId = element.getAttribute("data-post-id");
            if (postId) {
              localStorage.setItem(`last_viewed_post_${id}`, postId);
            }
          }
        });
      },
      {
        threshold: 0.5, // Post must be 50% visible to be considered "viewed"
      }
    );

    const postElements = document.querySelectorAll(".post-item");
    postElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [posts, id]);

  return (
    <div className="flex flex-col h-full">
      <CourseHeader name={courseInfo.name} image={courseInfo.image} />
      <div className="h-full p-4 px-2 flex flex-col items-end overflow-auto">
        <div className="max-w-[60rem] w-full">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full flex flex-col items-end mb-4 gap-1 post-item"
              data-post-id={post.id}
            >
              <div className="relative rounded-xl bg-[#00000010] rounded-ee rounded-es border border-gray-200 font-IRANYekan py-1 w-11/12">
                <h4 className="mb-2 text-sm px-3 font-bold">
                  {courseInfo.name}
                </h4>
                  <Image
                    src={`https://test22.liara.run${post.file}`}
                    alt="Post Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <PlayCircle sx={{ color: "white", fontSize: "5rem" , position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" , opacity: 0.6 }} />
                <p className="whitespace-pre-line text-sm px-3 pt-2 mb-[-16px]">
                  {post.content}
                </p>
                <div className="h-8"></div>
                <span className="absolute bottom-1 left-3 text-gray-500 text-sm">
                  {formatTime(post.created_at)}
                </span>
              </div>
              <div className="flex items-center gap-1 w-11/12">
                <div
                  className="w-full max-w-[65%]"
                  onClick={() => setIsChatOpen(true)}
                >
                  <Button />
                </div>
                <TestButton />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChatBotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}/>
    </div>
  );
}
