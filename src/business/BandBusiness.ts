import { IBandData } from "../model/interfaceBandData";
import Band from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupBandDTO } from "../types/signupBandDTO";

export default class BandBusiness{

        private bandData:IBandData;
        private idGenerator:IdGenerator;
        private hashManager:HashManager;
        private authenticator:Authenticator;

    constructor(userDataRepository:IBandData){
        this.bandData = userDataRepository
        this.idGenerator = new IdGenerator
        this.hashManager = new HashManager
        this.authenticator = new Authenticator
    }

    signup = async (input:SignupBandDTO) =>{
        //validacao        
        const {name, music_genre, responsible} = input
        if(!name || !music_genre || !responsible ){
            throw new Error("Campos inválidos")
        }

        //conferir se a banda existe
        const registeredBand = await this.bandData.findByName(name)
        if(registeredBand){
            throw new Error("Banda já cadastrada")
        }

        //criar uma id pro usuario
        const id = this.idGenerator.generateId()

        //criar o usuario no banco
        const band = new Band(
            id,
            name,
            music_genre,
            responsible                       
        )
        await this.bandData.insertBand(band)        
    }
}