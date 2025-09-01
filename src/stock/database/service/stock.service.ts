import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stock } from "src/db/entity/stock.entity";
import { Repository } from "typeorm";
import { StockRepository } from "../repository/stock.repository";



 @Injectable()
export class StockRepositoryService {

    constructor(
        @InjectRepository(Stock)
        private readonly stockRepository: StockRepository,
        private readonly logger: Logger
    ){}


    async insertarStock(stock) {

        return this.stockRepository.insertarStock(stock);

    }
    

}