import { HFlow } from "bold-ui";
import { CSSProperties } from "react";

interface MessageProps {
  text: string;
  user: string;
}

export default function MessageComponent(props: MessageProps) {
  return (
    <div style={props.user === "user" ? userMessageStyle : botMessageStyle}>
      <HFlow>
        {props.user === "bot" && <label style={labelStyle}>b_ot</label>}
        <p>{props.text}</p>
        {props.user === "user" && <label style={labelStyle}>você</label>}
      </HFlow>
    </div>
  );
}

const MessageStyle = {
  width: "792px",
  padding: "16px",
};

const userMessageStyle: CSSProperties = {
  ...MessageStyle,
  textAlign: "right",
};

const botMessageStyle: CSSProperties = {
  ...MessageStyle,
  textAlign: "left",
};

const labelStyle = {
  paddingTop: "16px",
  fontWeight: "bold",
};
