import api from "./api";

export const getResponse = (submitText: string): Promise<object> => {
  return api.get(`/bot_text/${submitText}`);
};
