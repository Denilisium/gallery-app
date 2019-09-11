const RANDOM_IMAGE_URL = 'https://picsum.photos';

export class ImagesService {
    constructor() { }

    /**
     * Get specific amount of images
     * @param {number} count of images
     */
    preloadImages(count = 10) {
        const images = [];
        // test sizes
        const sizes = [[1366, 778], [768, 1366], [1366, 778], [768, 1366], [1366, 778], [768, 1366], [1366, 778], [768, 1366], [1366, 778], [768, 1366]];

        for (let i = 0; i < count; i++) {
            images.push(this.getImage(...sizes[i], i));
        }

        return Promise.all(images);
    }

    getImage(width = 200, height = 300, prefix) {
        return new Promise((resolve, reject) => {
            const img = new Image(width, height);
            img.src = this.getImageSrc(width, height, prefix);
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject();
            };
        });
    }

    /**
     * Get url of a random image
     * @param {number} width of the image
     * @param {number} height of the image
     * @param {string|number} prefix just for disabling cache
     */
    getImageSrc(width, height, prefix = Date.now()) {
        return `${RANDOM_IMAGE_URL}/${width}/${height}/?${prefix}`;
    }
}

export const instance = new ImagesService();