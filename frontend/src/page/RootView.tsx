import { useState } from "react";
import ChatComponent from "../components/ChatComponent";
import FormComponent from "../components/FormComponent";
import HeaderComponent from "../components/HeaderComponent";

export interface Message {
  text: string;
  user: string;
}

export default function RootView() {
  const [messages, setMessages] = useState<Message[]>([{
    user: "lasdasmd",
    text: "lasdnasld"
  }]);

  return (
    <>
      <HeaderComponent />
      <ChatComponent messages={messages} />
      <FormComponent messages={messages} setMessages={setMessages} />
    </>
  );
}
