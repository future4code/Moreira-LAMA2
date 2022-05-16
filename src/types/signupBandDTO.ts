import Band from "../model/Band"

export type SignupBandDTO = {
    id?: string
    name: string
    music_genre: string
    responsible: string    
}

export type SearchOutPutDTO = {
    id: string
    name: string
    music_genre: string
    responsible: string
}

export function toBandModel(band: any): Band | PromiseLike<Band> {
    return new Band(band.id, band.name, band.music_genre, band.responsible); 
}


