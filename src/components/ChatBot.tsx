import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    id: number;
    text: string;
    isBot: boolean;
    showWhatsApp?: boolean;
  }>>([
    {
      id: 1,
      text: "Hello! I'm your Harley Systems assistant. How can I help you today?",
      isBot: true
    }
  ]);

  const quickReplies = [
    "Tell me about your services",
    "I need a custom solution", 
    "Schedule a demo",
    "Contact sales team"
  ];

  const handleQuickReply = (reply: string) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: reply,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Add bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your interest! For personalized assistance, please contact us on WhatsApp. Our team is ready to help you.",
        isBot: true,
        showWhatsApp: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/254720143959?text=Hello%20Harley%20Systems,%20I'm%20interested%20in%20your%20services", "_blank");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 glass-primary p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-2xl"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-96 glass-primary rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-secondary/20 p-4 border-b border-white/10">
            <h3 className="text-white font-semibold flex items-center">
            <img 
                src="/assets/logo.png" 
                alt="Harley Systems" 
                className="h-20 w-auto object-contain bg-transparent"
              />
              Harley Systems Assistant
            </h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-white/10 text-white'
                      : 'bg-secondary text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.showWhatsApp && (
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs transition-colors"
                    >
                      Continue on WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-lg transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;