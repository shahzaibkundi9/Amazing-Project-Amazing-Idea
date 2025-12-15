import { render, screen } from "@testing-library/react";
import StatCard from "../components/analytics/statCard";

test("StatCard renders title", () => {
  render(<StatCard title="Orders" value={10} />);
  expect(screen.getByText("Orders")).toBeInTheDocument();
});
