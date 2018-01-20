export class Meme {
    constructor(
        private id: string,
        private imageLinks: Array<string>,
        private raiting: number
    ) {
        id = '';
        imageLinks = [];
        raiting = 0;
    }
}
