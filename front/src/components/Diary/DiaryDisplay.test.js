import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import DiaryDisplay from "./DiaryDisplay";

test ("Diary renders with correct diary text value", function () {
    const week = 1;
    const diary = "hello world" ;
    const getDiary = jest.fn();
    render (<DiaryDisplay week={week} diary={diary} getDiary={getDiary}/>);
    const diaryElement = screen.getByText(/hello world/);
    expect(diaryElement).toBeInTheDocument();
});

