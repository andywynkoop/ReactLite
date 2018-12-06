import reconcile from '../lib/reconciliation/reconcile';

let rootContainer = null;
const render = (element, target) => {
  const prevContainer = rootContainer;
  const nextContainer = reconcile(target, prevContainer, element);
  rootContainer = nextContainer;
}

export default render;