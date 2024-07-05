import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Input from "./index";

describe("Input Component", () => {
  test("renders input with placeholder", () => {
    const placeholder = "Enter text";
    const { getByTestId } = render(
      <Input placeholder={placeholder} value="" onChange={() => {}} />
    );
    const inputElement = getByTestId("customInput");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
  });

  test("calls onChange function when input value changes", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Input placeholder="Enter text" value="" onChange={handleChange} />
    );
    const inputElement = getByTestId("customInput");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  test("displays the correct value", () => {
    const value = "Test value";
    const { getByTestId } = render(
      <Input placeholder="Enter text" value={value} onChange={() => {}} />
    );
    const inputElement = getByTestId("customInput");
    expect(inputElement).toHaveValue(value);
  });
});
