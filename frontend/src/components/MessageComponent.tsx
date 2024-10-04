import { HFlow } from "bold-ui";
import { CSSProperties } from "react";

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

const MessageStyle: CSSProperties = {
  height: "64px",
  width: "50vw",
  paddingTop: "1vh",
  textAlign: "left",
};

const labelStyle = {
  paddingTop: "16px",
  fontWeight: "bold",
};
