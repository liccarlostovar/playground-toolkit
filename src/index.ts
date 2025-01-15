export * from "./loremPicsum";
export * from "./utils";

console.log("Initialized the library");
import { imagesService } from "./loremPicsum";
import * as utils from "./utils";
export const Test = async () => {
    console.log("Lorem Picsum service configuration", imagesService.config);
    // console.log("Lorem Picsum service images", await imagesService.fetchImages());
    console.log("utils.getRandomNumber", utils.getRandomNumber(1, 10));
    console.log("utils.getRandomColor", utils.getRandomColor());
};

Test();
