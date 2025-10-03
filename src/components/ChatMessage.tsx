import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  sender: "user" | "other";
  timestamp: string;
  avatar?: string;
}

const ChatMessage = ({ message, sender, timestamp, avatar }: ChatMessageProps) => {
  const isUser = sender === "user";
  
  return (
    <div className={cn("flex gap-2 mb-4 animate-fade-in", isUser && "flex-row-reverse")}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
        isUser ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
      )}>
        {avatar ? (
          <img src={avatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-xs font-medium">
            {isUser ? "You" : "AI"}
          </span>
        )}
      </div>
      <div className={cn("flex flex-col max-w-[75%]", isUser && "items-end")}>
        <div
          className={cn(
            "px-4 py-2 rounded-2xl shadow-sm",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-card text-card-foreground rounded-tl-sm"
          )}
        >
          <p className="text-sm">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1 px-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
