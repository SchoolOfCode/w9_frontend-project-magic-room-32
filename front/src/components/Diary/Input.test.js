import { test, expect, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import DiaryInput from "./Input.js";

describe("DiaryInput", function () {
    
  test("Diary Input renders input element", function () {
    const submitDiary = jest.fn();
    render(<DiaryInput submitDiary={submitDiary} />);
    const inputElement = screen.getByLabelText(/my diary/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("Diary Input is a typeable field", function () {
    const submitDiary = jest.fn();
    render(<DiaryInput submitDiary={submitDiary} />);
    const inputElement = screen.getByLabelText(/my diary/i);
    fireEvent.change(inputElement, {
      target: { value: "This is a diary entry" },
    });
    expect(inputElement.value).toBe("This is a diary entry");
  });

  // This test currently fails
  test("Diary Input should revert to blank onSubmit", function () {
    const submitDiary = jest.fn();
    render(<DiaryInput submitDiary={submitDiary} />);
    const inputElement = screen.getByLabelText(/my diary/i);
    const submitButton = screen.getByText(/submit/i);
    fireEvent.change(inputElement, {
      target: { value: "This is a diary entry" },
    });
    fireEvent.click(submitButton);
    expect(inputElement.value).toBe("");
  });
});
