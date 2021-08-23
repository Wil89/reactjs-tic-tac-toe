import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Square } from "../components/Square";

describe("Testing Square component", () => {
  afterEach(cleanup);

  it("Square match snapshot", () => {
    const { asFragment } = render(<Square />);
    expect(asFragment(<Square />)).toMatchSnapshot();
  });

  it("Test initial value", () => {
    const { getByTestId } = render(<Square />);
    expect(getByTestId("square")).toHaveTextContent("");
  });

  it("Test event called", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Square onClick={onClick} />);

    fireEvent.click(getByTestId("square"));
    expect(onClick).toHaveBeenCalled();
  });
});
