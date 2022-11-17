import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

describe("Verify Dashboard Display", () => {
  const client = createTestQueryClient();
  test("Verify form is present", async () => {
    const dashboard = render(
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Dashboard />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(await dashboard.findByText("Population der Staaten")).toBeVisible();
  });
});
