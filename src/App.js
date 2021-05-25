import "./styles.css";

import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="box">
        <h1>Counter</h1>
        <h1
          className="count"
          style={{
            color:
              this.state.count === 0
                ? "black"
                : this.state.count > 0
                ? "green"
                : "red"
          }}
        >
          {this.state.count}
        </h1>
        <Button btnName="increment" funcKey={this.increment} />
        <Button btnName="reset" funcKey={this.reset} />
        <Button btnName="decrement" funcKey={this.decrement} />
      </div>
    );
  }
}
export default App;
