import { CSSProperties } from "react";
import { Message } from "../page/RootView";
import MessageComponent from "./MessageComponent";

interface ChatProps {
  messages: Message[]
}

export default function ChatComponent(props: ChatProps) {
  const { messages } = props  // texto enviado pelo usuário é enviado ao Message
  // chama service e envia o texto para o Message
  console.log(messages)


  return (
    <div style={style}>
      {messages.map((message) => {
        return (<MessageComponent text={message.text} user={message.user} />)
      })}
    </div>
  );
}

const style: CSSProperties = {
  overflowY: "scroll",
  height: "100vh",
  background: "white"
};
