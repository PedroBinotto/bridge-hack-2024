import { CSSProperties } from 'react';
import { Message } from "../page/RootView";
import MessageComponent from "./MessageComponent";

interface ChatProps {
  messages: Message[]
}

export default function ChatComponent(props: ChatProps) {
  const { messages } = props

  return (
    <div style={chatStyle}>
      {messages.map((message) => {
        return (<MessageComponent text={message.text} user={message.user} />)
      })}
    </div>
  );
}

const chatStyle: CSSProperties = {
  position: 'absolute',
  bottom: "10vh",
  overflowY: 'scroll'
}
