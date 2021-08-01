import MainApp from "./App";
import React from "react";
import ReactDOM from "react-dom";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
