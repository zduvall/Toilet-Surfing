export function querySelectorAllRegex(regex, attributeToSearch) {
  const output = [];
  if (attributeToSearch) {
    for (let element of document.querySelectorAll(`[${attributeToSearch}]`)) {
      if (regex.test(element.getAttribute(attributeToSearch))) {
        output.push(element);
      }
    }
  } else {
    for (let element of document.querySelectorAll('*')) {
      for (let attribute of element.attributes) {
        if (regex.test(attribute.value)) {
          output.push(element);
        }
      }
    }
  }
  return output;
}
