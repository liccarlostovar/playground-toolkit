import { imagesService } from "../loremPicsum";

test("fetch default images", async () => {
    imagesService.config.limit = 2;
    const images = await imagesService.fetchImages();
    expect(images).toHaveLength(2);
});
