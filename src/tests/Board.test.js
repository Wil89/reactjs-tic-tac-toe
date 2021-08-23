import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Board } from "../components/Board";

describe("Board component tests", () => {
  beforeEach(cleanup);

  it("Board match snapshot", () => {
    const { asFragment } = render(<Board />);
    expect(asFragment(<Board />)).toMatchSnapshot();
  });
});
