import { AxiosResponse } from "axios";
import { TextField } from "bold-ui";
import { CSSProperties, useState } from "react";
import { Message } from "../page/RootView";
import { getResponse } from "../service/service";

interface FormProps {
  messages: Message[]
  setMessages: (arg0: Message[]) => void
}

export default function FormComponent(props: FormProps) {
  const { messages, setMessages } = props
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setMessages([...messages, { user: "user", text: inputValue }])
    getResponse(inputValue).then((response: AxiosResponse<string>) => {
      setMessages([...messages, { user: "bot", text: response.data }])
    });
    setInputValue("");
  };

  return (
    <div style={style}>
      <TextField
        type="search"
        name="search"
        icon="arrowUp"
        placeholder="Placeholder text"
        value={inputValue}
        onChange={handleChange}
        onIconClick={handleClick}
      />
    </div>
  );
}

const style: CSSProperties = {
  width: "50vw",
  height: "32px",
  position: "absolute",
  bottom: "0",
  padding: "25px",
};
