"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDescription = (content, descriptionLength, elements, separator = "...") => {
    let description = "";
    const domparser = new DOMParser();
    const doc = domparser.parseFromString(content, "text/html");
    const targetElements = doc.querySelectorAll(elements.join(","));
    targetElements.forEach((element) => {
        description += `${element.innerText !== "" ? element.innerText + " " : ""} `;
    });
    return description.length > descriptionLength
        ? description.substring(0, descriptionLength) + separator
        : description;
};
exports.default = getDescription;
