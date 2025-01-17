import { AES, enc } from "crypto-js";

const KEY = "E]yGH/{JXq>bq-%";

export const encrypt = (str: string) => {
  const ciphertext = AES.encrypt(str, KEY);
  return encodeURIComponent(ciphertext.toString());
};

export const decrypt = (str: string) => {
  const decodedStr = decodeURIComponent(str);
  return AES.decrypt(decodedStr, KEY).toString(enc.Utf8);
};
