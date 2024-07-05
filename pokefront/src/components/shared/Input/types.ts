import { ChangeEventHandler } from "react";

export type TInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
  value?: string;
};
