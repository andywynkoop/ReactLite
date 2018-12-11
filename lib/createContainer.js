import updateAttributes from './updateAttributes';
import flattenChildren from './flattenChildren';
import { isReactComponent, isFunctionalComponent } from './reconciliation/scenarios';
import createElement from '../api/createElement';

export const createDOMContainer = element => {
  const { type, props } = element;
  const dom = (type === "TEXT") 
    ? document.createTextNode("") 
    : document.createElement(type);
  updateAttributes(dom, {}, props);
  const childElements = props.children || [];
  const flattenedChildren = flattenChildren(childElements);
  const childContainers = flattenedChildren.map(createContainer).filter(c => !!c);
  const nextChildElements = childContainers.map(child => child.dom);
  nextChildElements.forEach(child => dom.appendChild(child));
  const container = { dom, element, childContainers };
  return container;
}

export const createReactContainer = element => {
  const container = {};
  const publicContainer = createPublicContainer(element, container);
  const childElement = publicContainer.render();
  const childContainer = createContainer(childElement);
  const { dom } = childContainer;
  Object.assign(container, { dom, element, childContainer, publicContainer });
  publicContainer.componentDidMount();
  return container;
}

export const createContainer = (element) => {
  element = reduce(element);
  if (isReactComponent(element)) {
    let nextContainer =  createReactContainer(element);
    return nextContainer;
  } else {
    
    if (typeof element != "object") {
      // assume text element, need further testing to support arrays of other jsx, but do something similar
      element = createElement("TEXT", { nodeValue: element });
    }
    let nextContainer =  createDOMContainer(element);
    return nextContainer;
  }
}

const reduce = element => {
  if (isFunctionalComponent(element)) {
    return reduce(element.type(element.props));
  }
  if (typeof element.type === "object") {
    return reduce(element.type);
  }
  return element;
}

const createPublicContainer = ({ type, props }, internalContainer) => {
  const publicContainer = new type(props);
  publicContainer.__internalContainer = internalContainer;
  return publicContainer;
}