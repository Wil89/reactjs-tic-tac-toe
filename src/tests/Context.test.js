import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Game } from "../components/Game";
import { HistoryContext, HistoryProvider } from "../context/Context";
import { Board } from "../components/Board";

const renderContext = (component) => {
  return {
    ...render(
      <HistoryProvider value={HistoryContext}>{component}</HistoryProvider>
    ),
  };
};

afterEach(cleanup);


it("Checking a Square initial value", ()=> {
    const { getAllByTestId } = renderContext(<Board/>);
    
    const elem = getAllByTestId('square')[0];
    expect(elem).toHaveTextContent("");
})

it("Checking value change", ()=> {
    const { getAllByTestId } = renderContext(<Board/>);
    
    const elem = getAllByTestId('square')[0];
    fireEvent.click(elem);

    expect(elem).toHaveTextContent('X');
})

it("Check initial Game Status", () => {
    const { getByTestId, getAllByTestId } = renderContext(<Game />);
    expect(getByTestId("status")).toHaveTextContent("Next Player: X");

    const elem = getAllByTestId('square')[0];
    fireEvent.click(elem);
    
    expect(getByTestId("status")).toHaveTextContent("Next Player: O");

  });
