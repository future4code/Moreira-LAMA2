import { Request, Response } from "express";
import BandBusiness from "../business/BandBusiness";
import BandData from "../data/BandData";
import Band from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { SearchOutPutDTO, SignupBandDTO } from "../types/signupBandDTO";

export default class BandController{
    
    constructor(
        private bandBusiness: BandBusiness
    ){}

    signup = async(req: Request, res: Response) =>{
        const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("Esse endpoint exige um token.")
        }        
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role !== 'ADMIN') {
            res.status(401).send('Acesso somente para administradores!')
        }
        const {name, music_genre, responsible} = req.body;

        const input: SignupBandDTO ={
            name,
            music_genre,
            responsible                        
        }
        try {
            const token = await this.bandBusiness.signup(input)
            
            res.status(201).send({message: "Banda cadastrada com sucesso"})
            
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    search = async(req: Request, res: Response) =>{
        try {
            const { name } = req.params            
           
            const input: SignupBandDTO ={
                id: req.params.id,
                name: req.params.name,
                music_genre: req.params.music_genre,
                responsible: req.params.responsible
            }
          
            const getBand = await this.bandBusiness.search(input)
            console.log(getBand)            

            res.status(200).send({message: "sucess in search", getBand})

        } catch(error){
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no search")
        }    
    }
}

