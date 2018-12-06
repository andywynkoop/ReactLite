import Component from '../../api/Component';

export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
export const UPDATE_EXISTING_ELEMENT = "UPDATE_EXISTING_ELEMENT";
export const REPLACE_EXISTING_ELEMENT = "REPLACE_EXISTING_ELEMENT";
export const REMOVE_EXISTING_ELEMENT = "REMOVE_EXISTING_ELEMENT";

export const getScenario = (previousContainer, nextElement) => {
  if (!previousContainer) {
    return ADD_NEW_ELEMENT;
  } else if (!nextElement) {
    return REMOVE_EXISTING_ELEMENT;
  } else if (previousContainer.element.type === nextElement.type) {
    return UPDATE_EXISTING_ELEMENT;
  } else {
    return REPLACE_EXISTING_ELEMENT
  }
}

export const isReactComponent = (element) => 
  element.type.prototype instanceof Component;