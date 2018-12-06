const updateAttributes =  (dom, props, nextProps) => {
  Object.keys(props).forEach(propName => {
    if (propName === "children") {}
    else if (propName.startsWith('on')) {
      const event = propName.slice(2).toLowerCase();
      dom.removeEventListener(event, props[propName]);
    } else {
      dom[propName] = null;
    }
  });

  Object.keys(nextProps).forEach(propName => {
    if (propName === "children") { }
    else if (propName.startsWith('on')) {
      const event = propName.slice(2).toLowerCase();
      dom.addEventListener(event, nextProps[propName]);
    } else {
      dom[propName] = nextProps[propName];
    }
  });
};

export default updateAttributes;