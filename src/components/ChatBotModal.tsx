import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBotModal({ isOpen, onClose }: ChatBotModalProps) {
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "سلام ! چطور میتونم کمکتون کنم؟", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "در حال پردازش سوال شما هستم...", isBot: true },
        ]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center z-50 p-4 animate-fadeIn">
<div className="bg-white rounded-2xl w-full max-w-3xl h-[80vh] flex flex-col shadow-2xl animate-slideUp">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-2">
            <ChatIcon className="text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800">
              چت با هوش مصنوعی
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              {msg.isBot && (
                <div className="mt-2">
                  <SmartToyIcon className="text-blue-500" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
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

        <div className="p-6 border-t bg-gray-50">
          <div className="flex gap-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="پیام خود را بنویسید..."
            //   فقط کاربر اینتر زد هم پیام بی صاحاب بره 
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition-all duration-200 font-medium flex items-center gap-3 min-w-[120px] justify-center group"
            >
              <span className="transform group-hover:scale-105 transition-all duration-300">
                ارسال
              </span>
              <SendIcon
                className="text-xl transform rotate-[180deg] group-hover:-translate-x-1 transition-all duration-300 group-hover:animate-pulse"
                fontSize="small"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
