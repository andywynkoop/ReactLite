const flattenChildren = (children) => {
  let flatChildren = [];
  children.forEach(child => {
    if (child.constructor.name === "Array") {
      flatChildren = flatChildren.concat(child);
    } else {
      flatChildren.push(child);
    }
  });
  return flatChildren;
}

export default flattenChildren;