import filterImageHandler from "../handlers/filterImageHandler.js";
import dom from "../dom.js";

const keyupEvent = () => {
 dom.input.addEventListener('keyup', () => {
    const value = dom.input.value;
    filterImageHandler(value);
 })
}

export default keyupEvent;