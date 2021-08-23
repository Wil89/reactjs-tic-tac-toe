import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Steps } from "../components/Steps";

describe("Board component tests", () => {
  beforeEach(cleanup);

  it("Steps match snapshot", () => {
    const { asFragment } = render(<Steps />);
    expect(asFragment(<Steps />)).toMatchSnapshot();
  });

  it("Describe initial value", () => {
    const { getByTestId } = render(<Steps />);
    expect(getByTestId("step")).toHaveTextContent("Go to game start");
  });

  it("Test event launched", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Steps onClick={onClick} />);

    fireEvent.click(getByTestId("step"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
