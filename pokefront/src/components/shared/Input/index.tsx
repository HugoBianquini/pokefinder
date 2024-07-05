import { CustomInput } from "./styles";
import { TInputProps } from "./types";

const Input = ({ placeholder, onChange, value }: TInputProps) => {
  return (
    <CustomInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      data-testid="customInput"
    />
  );
};

export default Input;
