import Band from "../model/Band"
import { IBandData } from "../model/interfaceBandData"
import { BaseDatabase } from "./BaseDatabase"

export default class BandData extends BaseDatabase implements IBandData {
    protected TABLE_NAME = "NOME_TABELA_BANDAS"

    insertBand = async (band: Band): Promise<Band> => {
        try {
            console.log(band)
            await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: band.id,
                    name: band.name,
                    music_genre:band.music_genre,
                    responsible: band.responsible                                        
                })
                return band
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
    findByName = async (name: string):Promise<Band> => {
        try {
            const queryResult = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ name })

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}
