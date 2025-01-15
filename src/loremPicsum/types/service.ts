export interface ImagesService {
    config: ImagesServiceConfiguration;
    fetchImages: (page?: number, limit?: number) => Promise<ImageItem[]>;
}

export interface ImagesServiceConfiguration {
    baseUrl: string;
    limit: number;
}

export interface ImageItem {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}
