"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesService = void 0;
const defaultConfig = {
    baseUrl: "https://picsum.photos",
    limit: 30,
};
exports.imagesService = {
    config: {
        baseUrl: defaultConfig.baseUrl,
        limit: defaultConfig.limit,
    },
    fetchImages: (page, limit) => {
        var _a;
        if (page === void 0) { page = 0; }
        if (limit === void 0) { limit = (_a = exports.imagesService.config.limit) !== null && _a !== void 0 ? _a : 30; }
        const { baseUrl } = Object.assign(Object.assign({}, defaultConfig), exports.imagesService.config);
        return fetch(`${baseUrl}/v2/list?page=${page}&limit=${limit}`).then((response) => response.json());
    },
};
exports.default = exports.imagesService;
