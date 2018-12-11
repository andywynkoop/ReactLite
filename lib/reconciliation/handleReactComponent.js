import reconcile from './reconcile';
import flattenChildren from '../flattenChildren';
import {
  ADD_NEW_ELEMENT,
  REMOVE_EXISTING_ELEMENT,
  UPDATE_EXISTING_ELEMENT,
  REPLACE_EXISTING_ELEMENT,
  getScenario,
  isReactComponent
} from './scenarios';
import { createContainer } from '../createContainer';

const handleReactComponent = (parentDOMElement, previousContainer, nextElement) => {
  const scenario = getScenario(previousContainer, nextElement);
  let nextContainer;
  switch(scenario) {
    case ADD_NEW_ELEMENT:
      nextContainer = createContainer(nextElement, previousContainer);
      parentDOMElement.appendChild(nextContainer.dom);
      return nextContainer;
    case REMOVE_EXISTING_ELEMENT:
      previousContainer.publicContainer.componentWillUnmount();
      parentDOMElement.removeChild(previousContainer.dom);
      return null;
    case UPDATE_EXISTING_ELEMENT:
      const { publicContainer } = previousContainer;
      const { props: oldProps } = publicContainer;
      publicContainer.props = nextElement.props;
      const nextChildElement = publicContainer.render();
      nextChildElement.props.children = flattenChildren(nextChildElement.props.children);
      const oldChildContainer = previousContainer.childContainer;
      const nextChildContainer = reconcile(parentDOMElement, oldChildContainer, nextChildElement);
      previousContainer.dom = nextChildContainer.dom;
      previousContainer.childContainer = nextChildContainer;
      previousContainer.element = nextElement;
      publicContainer.componentDidUpdate(oldProps);
      return previousContainer;
    case REPLACE_EXISTING_ELEMENT:
      if (isReactComponent(previousContainer.element)) previousContainer.publicContainer.componentWillUnmount();
      nextContainer = createContainer(nextElement, previousContainer);
      parentDOMElement.replaceChild(nextContainer.dom, previousContainer.dom);
      return nextContainer;
    default: 
      console.log("I DONT KNOW WHAT TO DO");
      return null;
  }
}

export default handleReactComponent;