import { CustomButton } from "./styles";
import { TButtonProps } from "./types";

const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <CustomButton type="submit" onClick={onClick} data-testid="customButton">
      {children}
    </CustomButton>
  );
};

export default Button;
