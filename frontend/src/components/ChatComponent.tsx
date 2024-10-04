import { Message } from "../page/RootView";
import MessageComponent from "./MessageComponent";

interface ChatProps {
  messages: Message[]
}

export default function ChatComponent(props: ChatProps) {
  const {messages} = props  // texto enviado pelo usuário é enviado ao Message
  // chama service e envia o texto para o Message

  return (
    <div>
      {messages.map((message: Message) => (
        <MessageComponent text={message.text} user={message.user} />
      ))}
    </div>
  );
}
