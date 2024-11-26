import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LogoIcons from "/src/assets/icons/earth-logo-horizon.svg?react";

function ChatAIPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "안녕하세요! 저는 에코입니다. 무엇을 도와드릴까요?",
    },
  ]);

  const [input, setInput] = useState("");
  let isThrottled = false; // 요청 제한 플래그

  const handleSendMessage = async () => {
    if (isThrottled) return;
    if (!input.trim()) return; // 빈 메세지 방지

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 5000);

    try {
      const trimmedMessages = messages.slice(-10); // 최근 10개의 메세지만 전송
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            ...trimmedMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "죄송합니다, 오류가 발생했습니다." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container>
      <LogoIcon />
      <ChatWindow>
        {messages.map((msg, index) => (
          <MessageContainer key={index} $isUser={msg.sender === "user"}>
            {msg.sender !== "user" && (
              <ProfileImage
                src="/src/assets/icons/ai-icon.png"
                alt={msg.sender}
              />
            )}
            <Message $isUser={msg.sender === "user"}>{msg.text}</Message>
          </MessageContainer>
        ))}
      </ChatWindow>
      <InputContainer>
        <ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력해주세요"
        />
        <SendButton onClick={handleSendMessage}>전송</SendButton>
      </InputContainer>
    </Container>
  );
}

export default ChatAIPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const ChatWindow = styled.div`
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

const Message = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
  background-color: ${(props) => (props.$isUser ? "#007bff" : "#f1f0f0")};
  color: ${(props) => (props.$isUser ? "#ffffff" : "#000000")};
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: #e9ecef;
  border-top: 1px solid #ddd;
  gap: 10px;

  position: fixed;
  bottom: 70px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  color: black;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 16px;
`;

const SendButton = styled.button`
  width: 60px;

  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LogoIcon = styled(LogoIcons)`
  width: 140px;
  height: 30px;
  margin-left: 30px;
  margin-top: 36px;
`;
