export class User {
    constructor(
        private id: string,
        private password: string,
        private memes: {memeId: string}[]) {
            id = '';
            password = '';
            memes = [];
    }
}
