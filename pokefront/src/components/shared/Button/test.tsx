import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";
import CustomThemeProvider from "@/providers/ThemeProvider";

describe("Button Component", () => {
  test("renders button with children", () => {
    const children = "Click me";
    const { getByTestId } = render(
      <CustomThemeProvider>
        <Button onClick={() => {}}>{children}</Button>
      </CustomThemeProvider>
    );
    const buttonElement = getByTestId("customButton");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(children);
  });

  test("calls onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <CustomThemeProvider>
        <Button onClick={handleClick}>Click me</Button>
      </CustomThemeProvider>
    );
    const buttonElement = getByTestId("customButton");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
