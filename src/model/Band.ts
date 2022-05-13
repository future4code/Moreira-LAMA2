export default class Band {

    constructor(
        private _id: string,
        private _name: string,
        private _music_genre: string,
        private _responsible: string
    ){}

    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get music_genre(): string {
        return this._music_genre
    }
    public set music_genre(value: string) {
        this._music_genre = value
    }
    public get responsible(): string {
        return this._responsible
    }
    public set responsible(value: string) {
        this._responsible = value
    }
}