import React from "react";

export default class Counter extends React.Component {
  state = { greeting: 'Hello' };
  render() {
    return (
      <div>
        <div data-testid="greeting">{this.state.greeting}</div>
      </div>
    );
  }
}
