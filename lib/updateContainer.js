import reconcile from './reconcile';
const updateContainer = (internalContainer, callback) => {
  const { parentNode } = internalContainer.dom;
  const element = internalContainer.element;
  reconcile(parentNode, internalContainer, element);
  callback();
}

export default updateContainer;