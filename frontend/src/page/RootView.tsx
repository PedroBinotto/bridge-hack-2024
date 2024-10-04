import { useState } from "react";
import ChatComponent from "../components/ChatComponent";
import FormComponent from "../components/FormComponent";
import HeaderComponent from "../components/HeaderComponent";

export interface Message {
  text: string;
  user: string;
}

export default function RootView() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div style={rootViewStyle}>
      <HeaderComponent />
      <ChatComponent messages={messages} />
      <FormComponent messages={messages} setMessages={setMessages} />
    </div>
  );
}

const rootViewStyle = {
  height: "100vh",
  width: "50vw",
}
