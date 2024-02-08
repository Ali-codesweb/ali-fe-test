// HelloComponent.test.js
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "./index";

test("expects Product Description :", () => {
  render(<HomeScreen />);
  const descriptionText = screen.getByText("Product Description :");
  expect(descriptionText).toBeInTheDocument();
});
