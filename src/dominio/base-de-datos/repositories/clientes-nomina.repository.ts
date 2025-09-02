import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Nomina } from "../entity/nomina.entity";


@Injectable()
export class NominaRepository extends Repository<Nomina> { 

    /* constructor(private readonly logger: Logger){
        
    } */
} 