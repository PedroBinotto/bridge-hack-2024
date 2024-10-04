import api from "./api";

export const getResponse = (submitText: string) : Promise<any> => {
  return api.get("/bot_text", { params: { text: submitText } });
};
