import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'manager';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Я менеджер AutoMotors. Чем могу помочь?',
      sender: 'manager',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      setTimeout(() => {
        const autoReply: Message = {
          id: messages.length + 2,
          text: 'Спасибо за сообщение! Наш менеджер свяжется с вами в ближайшее время. Также вы можете связаться с нами через WhatsApp: 8 (960) 841-52-01',
          sender: 'manager',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, autoReply]);
        if (!isOpen) {
          setUnreadCount(prev => prev + 1);
        }
      }, 1500);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-accent hover:bg-accent/90 z-50 hover:scale-110 transition-transform"
          size="icon"
        >
          <div className="relative">
            <Icon name="MessageCircle" size={28} />
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-destructive text-destructive-foreground">
                {unreadCount}
              </Badge>
            )}
          </div>
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col animate-scale-in border-2 border-accent">
          <CardHeader className="bg-accent text-accent-foreground pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                  <Icon name="Headphones" size={22} />
                </div>
                <div>
                  <CardTitle className="text-lg">Онлайн-консультант</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs">Онлайн</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground hover:bg-accent-foreground/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString('ru-RU', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Напишите сообщение..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-accent hover:bg-accent/90"
                  size="icon"
                >
                  <Icon name="Send" size={18} />
                </Button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://wa.me/79608415201', '_blank')}
                  className="gap-2 text-xs"
                >
                  <Icon name="MessageCircle" size={14} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => (window.location.href = 'tel:+79608415201')}
                  className="gap-2 text-xs"
                >
                  <Icon name="Phone" size={14} />
                  Позвонить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
