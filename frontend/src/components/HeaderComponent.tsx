import { Button, HFlow, Icon } from "bold-ui";
import { CSSProperties } from "react";
import botLogo from "../assets/bot.svg";

export default function Header() {
  return (
    <div style={headerStyle}>
      <HFlow>
        <img src={botLogo} style={imageStyle} />
        <Button skin="ghost" style={buttonStyle}>
          <Icon icon="userCard" />
        </Button>
        <Button skin="ghost" style={buttonStyle}>
          <Icon icon="openDoor" />
        </Button>
      </HFlow>
    </div>
  );
}
const headerStyle: CSSProperties = {
  position: "absolute",
  top: "0",
  padding: "25px",
};
const imageStyle: CSSProperties = {
  paddingRight: "50vw",
};

const buttonStyle = {
  paddingRight: "4px",
};
