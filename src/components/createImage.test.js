/**
 * @jest-environment jsdom
 */

import createImage from "../components/createImage.js";

describe("create an item element", () => {
  const image = createImage({ id: "all", title: "All" });

  test("nodeName -> div", () => {
    expect(image.nodeName).toEqual("DIV");
  });

  test("className -> image-box", () => {
    expect(image.className).toEqual("image-box");
  });

});