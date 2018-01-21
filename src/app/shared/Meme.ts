export class Meme {
    id: string;
    imageLinks: Array<string>;
    rating: number;

    constructor(_id: string, _imageLinks: Array<string>, _rating: number) {
        this.id = _id;
        this.imageLinks = _imageLinks;
        this.rating = _rating;
    }
}
