import Band from "./Band"

export interface IBandData{
    findByName(email: string):Promise<Band>
    insertBand(band:Band):Promise<Band>
}
