import data from "../data.js";
import dom from "../dom.js";
import createImage from "../components/createImage.js";

const loadHandler = () => {

  data.images.forEach((image) => {
    const imageBox = createImage(image);
    dom.imagesContainer.append(imageBox);
  });
};

export default loadHandler;