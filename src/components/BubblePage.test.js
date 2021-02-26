import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from '../api/fetchBubbles';

jest.mock('../api/fetchBubbles');

const colorList = {
  data: [{"color":"aliceblue","code":{"hex":"#f0f8ff"},"id":1},{"color":"limegreen","code":{"hex":"#99ddbc"},"id":2},{"color":"aqua","code":{"hex":"#00ffff"},"id":3},{"color":"aquamarine","code":{"hex":"#7fffd4"},"id":4},{"color":"lilac","code":{"hex":"#9a99dd"},"id":5},{"color":"softpink","code":{"hex":"#dd99ba"},"id":6},{"color":"bisque","code":{"hex":"#dd9a99"},"id":7},{"color":"softyellow","code":{"hex":"#dcdd99"},"id":8},{"color":"blanchedalmond","code":{"hex":"#ffebcd"},"id":9},{"color":"blue","code":{"hex":"#6093ca"},"id":10},{"color":"blueviolet","code":{"hex":"#8a2be2"},"id":11}]
}

test("Renders BubblePage without errors", async () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValueOnce(colorList);
  render(<BubblePage  />)
});

test("Fetches data and renders the bubbles on mounting", async() => {
  mockFetchBubbles.mockResolvedValueOnce(colorList);
  render(<BubblePage  />)
  // Finish this test

  await waitFor (async () => await screen.findByText(/colors/i))
  expect(screen.getByText(/colors/i)).toBeInTheDocument();

  await waitFor (async () => await screen.findByText(/bubbles/i))
  expect(screen.getByText(/bubbles/i)).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component💪🏼
//2. Setup test for initial rendering of bubbles on loading💪🏼