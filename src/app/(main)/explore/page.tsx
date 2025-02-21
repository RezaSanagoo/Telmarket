"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircularProgress, IconButton, Popover, Snackbar, Alert } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReportIcon from "@mui/icons-material/Report";
import CloseIcon from "@mui/icons-material/Close";
import { LinearProgress } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../../../public/img/LogoT.png";
import axiosInstance from "../../../utils/axiosInstance";

interface Story {
  id: number;
  image: string;
  caption: string;
  created_at: string;
  is_active: boolean;
  market: "Forex" | "Crypto" | "TSE" | "GOLDEN";
}

interface Post {
  id: number;
  file: string;
  caption: string;
  created_at: string;
  is_pinned: boolean;
  title: string;
  market_name: string;
}

interface ExploreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { stories?: Story[]; posts: Post[] };
}

export default function ExplorePage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<ExploreResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get<ExploreResponse>(
        `/api/explore/explore/?page=${page}&page_size=10`
      );

      setData(response.data);
      localStorage.setItem("exploreData", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching explore data:", error);
      setError("خطا در بارگذاری داده‌ها");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("exploreData");
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetchData();
    }

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, [page]);

  const handleLoadMore = () => {
    if (data?.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Add navigation handlers
  const handleStoryNavigation = (e: React.MouseEvent) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;

    if (clickX > screenWidth / 2) {
      // Right side click - go next
      if (currentStoryIndex < data!.results.stories!.length - 1) {
        setCurrentStoryIndex((prev) => prev + 1);
        setSelectedStory(data!.results.stories![currentStoryIndex + 1]);
        setProgress(0);
      } else {
        handleStoryClose();
      }
    } else {
      // Left side click - go previous
      if (currentStoryIndex > 0) {
        setCurrentStoryIndex((prev) => prev - 1);
        setSelectedStory(data!.results.stories![currentStoryIndex - 1]);
        setProgress(0);
      }
    }
  };

  // Update story click handler
  const handleStoryClick = (story: Story, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClickPosition({ x: rect.left, y: rect.top });
    setCurrentStoryIndex(
      data!.results.stories!.findIndex((s) => s.id === story.id)
    );
    setSelectedStory(story);
    setIsStoryOpen(true);
  };

  // Modify the story close handler
  const handleStoryClose = () => {
    setIsStoryOpen(false);
    setProgress(0);
  };

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = 100; // 100ms intervals
  const totalDuration = 10000; // 10 seconds

  useEffect(() => {
    if (isStoryOpen && !isPaused) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress =
            oldProgress + (progressInterval / totalDuration) * 100;
          if (newProgress >= 100) {
            clearInterval(timer);
            setIsStoryOpen(false);
            return 0;
          }
          return newProgress;
        });
      }, progressInterval);

      return () => clearInterval(timer);
    }
  }, [isStoryOpen, isPaused]);

  if (loading)
    return (
      <div className="w-full h-[calc(100vh-148px)] flex justify-center items-center">
        <CircularProgress />
      </div>
    );

  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {page === 1 && data?.results.stories && (
        <div className="flex flex-col w-full items-center">
          <div className="w-full h-full flex flex-row-reverse gap-3 p-4 px-2 scroll-none overflow-x-scroll">
            {data.results.stories.map((story) => (
              <div className="flex flex-col items-center gap-1" key={story.id}>
                <div
                  key={story.id}
                  className={`w-auto h-auto p-[2] rounded-[50px] shadow-[1px_2px_3px_0px_#00000040] border-[3px] border-blue-500 `}
                  onClick={(e) => handleStoryClick(story, e)}
                >
                  <div className="w-[60px] h-[60px] rounded-[50px] border-2 border-[#E7E7E7] bg-[#FFFFFF26] shadow-[1px_2px_4px_0px_#00000040] flex justify-center items-center">
                    <Image
                      src={"https://test22.liara.run" + story.image}
                      alt={story.caption}
                      width={65}
                      height={65}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                <span className="text-[12px] font-bold truncate max-w-[68px] overflow-hidden">
                  {story.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full gap-3">
        {data?.results.posts.map((post) => (
          <div
            key={post.id}
            className="w-full border-t border-[#0000002E] bg-[#FFFFFF47] backdrop-blur-[393.1px]"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between p-2 pr-4">
                <div className="flex items-center gap-2">
                  <div className="w-[38px] h-[38px] rounded-[50px] border-2 border-[#4190ff] p-[3.45px] flex justify-center items-center">
                    <Image
                      src={logo.src}
                      alt={post.market_name}
                      width={206} // Adjust based on your logo's dimensions
                      height={206} // Adjust based on your logo's dimensions
                    />
                  </div>
                  <span className="text-[12px] font-bold">
                    {post.market_name}
                  </span>
                </div>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon
                    className="rotate-90"
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </div>

              <Image
                src={"https://test22.liara.run" + post.file}
                alt={post.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />

              <div className="flex items-center justify-between p-4">
                <p className="text-[14px] leading-[22.64px] text-justify">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data?.next && (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        >
          بارگذاری بیشتر
        </button>
      )}

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <div className="flex flex-col p-2 min-w-[150px]">
          {[
            { icon: <ShareIcon sx={{ fontSize: 20 }} />, text: "اشتراک گذاری" },
            {
              icon: <BookmarkBorderIcon sx={{ fontSize: 20 }} />,
              text: "ذخیره",
            },
            { icon: <ReportIcon sx={{ fontSize: 20 }} />, text: "گزارش" },
          ].map((item, index) => (
            <button
              key={index}
              className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 justify-between"
              onClick={handleClose}
            >
              <span className="text-sm">{item.text}</span>
              <div className="text-gray-600 w-6 flex justify-center">
                {item.icon}
              </div>
            </button>
          ))}
        </div>
      </Popover>
      <AnimatePresence>
        {isStoryOpen && selectedStory && (
          <motion.div
            initial={{
              position: "fixed",
              top: clickPosition.y,
              left: clickPosition.x,
              width: 65,
              height: 65,
              borderRadius: "50%",
              zIndex: 1001,
              backgroundColor: "black",
              opacity: 1,
            }}
            animate={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              borderRadius: 0,
              opacity: 1,
            }}
            exit={{
              top: clickPosition.y,
              left: clickPosition.x,
              width: 65,
              height: 65,
              borderRadius: "50%",
              opacity: 0,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onPointerDown={() => setIsPaused(true)}
            onPointerUp={() => setIsPaused(false)}
            onClick={handleStoryNavigation}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y > 100) {
                  handleStoryClose();
                }
              }}
            >
              {/* Close button */}
              <IconButton
                onClick={handleStoryClose}
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 8,
                  color: "white",
                  zIndex: 1002,
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Progress bar */}
              <div className="absolute top-0 w-full px-2 pt-2">
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 2,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    "& .MuiLinearProgress-bar": { backgroundColor: "white" },
                  }}
                />
              </div>

              {/* Header */}
              <div className="absolute top-4 left-0 right-0 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={"https://test22.liara.run" + selectedStory.image}
                    alt="profile"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-medium">
                  {selectedStory.caption}
                </span>
              </div>

              {/* Main content */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full aspect-video max-w-4xl">
                  <Image
                    src={"https://test22.liara.run" + selectedStory.image}
                    alt={selectedStory.caption}
                    layout="responsive"
                    width={16}
                    height={9}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-8 left-0 right-0 px-4">
                <p className="text-white text-center">
                  {selectedStory.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </motion.div>
  );
}