import { HFlow } from "bold-ui";

interface MessageProps {
  text: string;
  user: string;
}

export default function MessageComponent(props: MessageProps) {
  return (
    <div style={MessageStyle}>
      <HFlow>
        <label style={labelStyle}>{props.user === "user" ? 'você' : 'bot'}</label>
        <p>{props.text}</p>
      </HFlow>
    </div>
  );
}

const MessageStyle = {
  height: "64px",
  width: "50vw",
  paddingTop: "1vh",
  overflow: 'auto'
};

const labelStyle = {
  paddingTop: "16px",
  fontWeight: "bold",
};
