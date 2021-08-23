import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Game } from "../components/Game";

describe("Board component tests", () => {
  beforeEach(cleanup);

  it("Game match snapshot", () => {
    const { asFragment } = render(<Game />);
    expect(asFragment(<Game />)).toMatchSnapshot();
  });
});
