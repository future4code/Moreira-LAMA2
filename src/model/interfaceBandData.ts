import Band from "./Band"

export interface IBandData{
    search(id: string, name: string):Promise<Band>
    findByName(email: string):Promise<Band>
    insertBand(band:Band):Promise<Band>
}
