const createElement = (type, attributes, ...children) => {  
  const props = Object.assign({}, attributes);

  props.children = children
    .filter(c => c != null)
    .map(child => 
      child instanceof Object ? child : createTextElement(child));
  return { type, props };
}

const createTextElement = nodeValue => createElement("TEXT", { nodeValue });

export default createElement;