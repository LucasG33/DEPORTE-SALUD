import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stock } from "src/entity/stock.entity";
import { Repository } from "typeorm";



 @Injectable()
export class StockRepositoryService {

    constructor(
        @InjectRepository(Stock)
        private readonly stockRepository: StockRepositoryService,
        private readonly logger: Logger
    ){}


    async insertarStock(stock) {

        return this.stockRepository.insertarStock(stock);

    }
    

}