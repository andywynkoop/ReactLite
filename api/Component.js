import updateContainer from '../lib/updateContainer';

class Component {
  constructor(props) {
    this.props = props;
    this.state = this.state || {};
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  setState(partialState, callback = () => {}) {
    this.state = Object.assign({}, this.state, partialState);
    updateContainer(this.__internalContainer, callback);
  }
}

export default Component;