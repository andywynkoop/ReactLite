import React, { Component } from './react-lite';
import Demo from './Demo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 5,
      demo: true
    }

    this.add = this.add.bind(this);
    this.toggleComponents = this.toggleComponents.bind(this);
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  add() {
    let { n } = this.state;
    n++;
    this.setState({ n });
  }

  toggleComponents() {
    this.setState({ demo: !this.state.demo });
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        {this.state.demo ? <Demo message={this.state.n} /> : <h1>Hello</h1>}
        <button onClick={this.toggleComponents}>Toggle</button>
      </div>
    );
  }
}

export default App;