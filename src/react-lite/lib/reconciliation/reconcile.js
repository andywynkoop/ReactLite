import handleReactComponent from './handleReactComponent';
import {
  ADD_NEW_ELEMENT, 
  REMOVE_EXISTING_ELEMENT,
  UPDATE_EXISTING_ELEMENT,
  REPLACE_EXISTING_ELEMENT,
  getScenario,
  isReactComponent
} from './scenarios';
import { createDOMContainer } from '../createContainer';
import updateAttributes from '../updateAttributes';

const reconcile = (parentDOMElement, previousContainer, nextElement) => {
  if(isReactComponent(nextElement)) {
    return handleReactComponent(parentDOMElement, previousContainer, nextElement);
  }
  
  const scenario = getScenario(previousContainer, nextElement);
  let nextContainer;
  switch(scenario) {
    case ADD_NEW_ELEMENT:
      nextContainer = createDOMContainer(nextElement);
      parentDOMElement.appendChild(nextContainer.dom);
      return nextContainer;
    case REMOVE_EXISTING_ELEMENT:
      parentDOMElement.removeChild(previousContainer.dom);
      return null;
    case UPDATE_EXISTING_ELEMENT:
      updateAttributes(previousContainer.dom, previousContainer.element.props, nextElement.props);
      previousContainer.childContainers = reconcileChildren(previousContainer, nextElement);
      previousContainer.element = nextElement;
      return previousContainer;
    case REPLACE_EXISTING_ELEMENT:
      nextContainer = createDOMContainer(nextElement);
      parentDOMElement.replaceChild(nextContainer.dom, previousContainer.dom);
      return nextContainer;
    default:
      console.log("I DONT KNOW WHAT TO DO");
      return null;
  }
};

const reconcileChildren = ({ dom, childContainers }, nextElement) => {
  const nextChildElements = nextElement.props.children || [];
  const newChildContainers = [];
  const count = Math.max(childContainers.length, nextChildElements.length);

  for(let i = 0; i < count; i++) {
    const childContainer = childContainers[i];
    const childElement = nextChildElements[i];
    const newChildContainer = reconcile(dom, childContainer, childElement);
    newChildContainers.push(newChildContainer);
  }
  return newChildContainers;
};

export default reconcile;