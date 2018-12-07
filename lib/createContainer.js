import updateAttributes from './updateAttributes';
import flattenChildren from './flattenChildren';
import { isReactComponent } from './reconciliation/scenarios';
import Component from '../api/Component';

export const createDOMContainer = element => {
  const { type, props } = element;
  const dom = (type === "TEXT") 
    ? document.createTextNode("") 
    : document.createElement(type);
  updateAttributes(dom, {}, props);
  const childElements = props.children || [];
  const flattenedChildren = flattenChildren(childElements);
  const childContainers = flattenedChildren.map(createContainer);
  const nextChildElements = childContainers.map(child => child.dom);
  nextChildElements.forEach(child => dom.appendChild(child));
  const container = { dom, element, childContainers };
  return container;
}

export const createReactContainer = element => {
  const container = {};
  const publicContainer = createPublicContainer(element, container);
  const childElement = publicContainer.render();
  publicContainer.componentDidMount();
  const childContainer = createContainer(childElement);
  const { dom } = childContainer;
  Object.assign(container, { dom, element, childContainer, publicContainer });
  return container;
}

export const createContainer = element => {
  element = reduce(element);
  if (isReactComponent(element)) {
    return createReactContainer(element);
  } else {
    console.log(element.type);
    debugger
    return createDOMContainer(element);
  }
}

const reduce = element => {
  if (typeof element.type === "function" && !isReactComponent(element)) {
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