import { useState, useEffect } from "react";
import { Send, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";
import BottomNav from "@/components/BottomNav";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const messages = [
    {
      id: 1,
      message: "Hi! I'm your learning assistant. How can I help you today?",
      sender: "other" as const,
      timestamp: "10:00 AM"
    },
    {
      id: 2,
      message: "I have a question about the React course",
      sender: "user" as const,
      timestamp: "10:02 AM"
    },
    {
      id: 3,
      message: "Of course! What would you like to know about the React course?",
      sender: "other" as const,
      timestamp: "10:02 AM"
    }
  ];

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSend = () => {
    if (message.trim() && !isOffline) {
      setMessage("");
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <div className="bg-gradient-primary text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Learning Assistant</h1>
        <p className="text-white/80 text-sm">Ask me anything about your courses</p>
      </div>

      {isOffline && (
        <div className="p-4 animate-slide-up">
          <Alert className="bg-destructive/10 border-destructive/20">
            <WifiOff className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              You're offline. Messages will be sent when connection is restored.
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      <div className="p-4 bg-card border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isOffline}
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            disabled={!message.trim() || isOffline}
            size="icon"
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Chat;
