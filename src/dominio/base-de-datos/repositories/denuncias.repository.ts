import { Injectable } from "@nestjs/common";
import { Denuncia } from "../entity/denuncia.entity";
import { Repository } from "typeorm";


@Injectable()
export class DenunciasRepository extends Repository<Denuncia> { 

}