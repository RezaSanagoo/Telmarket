import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/ArrowUpwardRounded";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../public/img/LogoT.png";
import Image from "next/image";
import axios from "axios";

interface Message {
  text: string;
  isBot: boolean;
  isLoading?: boolean;
}

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBotModal({ isOpen, onClose }: ChatBotModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "سلام ! چطور میتونم کمکتون کنم؟", isBot: true, isLoading: false },
  ]);
  const [input, setInput] = useState("");
  const [isLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [
      ...prev,
      userMessage,
      { text: "", isBot: true, isLoading: true },
    ]);
    setInput("");

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("لطفا وارد حساب کاربری خود شوید");

      const { data } = await axios.post(
        "https://test22.liara.run/api/bot/ask/",
        { question: input },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token).access}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: data.response, isBot: true },
      ]);
    } catch (error: unknown) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: "An error occurred:" + error, isBot: true },
      ]);
    }
  };
    if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-3xl h-[80vh] flex flex-col shadow-2xl animate-slideUp">
        <div className="flex justify-between items-center p-6 py-2 border-b">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-800">هوش مصنوعی</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 px-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-1 ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              {msg.isBot && (
                <div className="mt-1">
                  <Image
                    src={logo.src}
                    alt="AI"
                    width={48}
                    height={48}
                    className={`m-[-4px] transition-all duration-700 ${
                      msg.isLoading ? "animate-pulse" : ""
                    }`}
                    priority
                  />
                </div>
              )}

              <div
                className={`max-w-[80%] p-4 py-2 rounded-2xl ${
                  msg.isBot
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-500 text-white"
                }`}
              >
                <p className="text-base leading-relaxed">{msg.text}</p>
              </div>
              {!msg.isBot && (
                <div className="mt-2">
                  <PersonIcon className="text-blue-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-1 border-t rounded-2xl bg-gray-50">
          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 rounded-ee-none rounded-se-none focus:outline-none"
              placeholder="پیام خود را بنویسید..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl rounded-ss-none rounded-es-none transition-all duration-200 font-medium flex items-center gap-3 justify-center group disabled:opacity-70"
            >
              <SendIcon className="text-2xl transition-all duration-300 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
