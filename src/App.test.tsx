import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Work from "./pages/Work"; // example page

test("renders the selected projects page title", () => {
  render(
    <MemoryRouter initialEntries={["/work"]}>
      <Routes>
        <Route path="/work" element={<Work />} />
      </Routes>
    </MemoryRouter>
  );

  const title = screen.getByText(/Selected Projects/i);
  expect(title).toBeInTheDocument();
});
