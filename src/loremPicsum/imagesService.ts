import { ImagesService, ImagesServiceConfiguration } from "./types/service";

const defaultConfig: ImagesServiceConfiguration = {
    baseUrl: "https://picsum.photos",
    limit: 30,
};

export const imagesService: ImagesService = {
    config: {
        baseUrl: defaultConfig.baseUrl,
        limit: defaultConfig.limit,
    },
    fetchImages: (page: number = 0, limit: number = imagesService.config.limit ?? 30) => {
        const { baseUrl } = { ...defaultConfig, ...imagesService.config };
        return fetch(`${baseUrl}/v2/list?page=${page}&limit=${limit}`).then((response) => response.json());
    },
};

export default imagesService;
