const getDescription = (
  content: string,
  descriptionLength: number,
  elements: string[],
  separator = "..."
) => {
  let description = "";
  const domparser = new DOMParser();
  const doc = domparser.parseFromString(content, "text/html");
  const targetElements: NodeListOf<HTMLElement> = doc.querySelectorAll(
    elements.join(",")
  );
  targetElements.forEach((element) => {
    description += `${
      element.innerText !== "" ? element.innerText + " " : ""
    } `;
  });

  return description.length > descriptionLength
    ? description.substring(0, descriptionLength) + separator
    : description;
};

export default getDescription
