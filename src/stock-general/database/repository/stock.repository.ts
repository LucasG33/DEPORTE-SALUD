import { Stock } from "src/entity/stock.entity";
import { DataSource, InsertResult, Repository } from "typeorm"


export class StockRepository extends Repository<Stock> {
    constructor(private readonly dataSource: DataSource) {
        super(Stock, dataSource.createEntityManager())
    }

    async insertarStock(stock: Stock): Promise<InsertResult> {
        const table = this.create(stock);

        return this.createQueryBuilder()
            .insert()
            .values(table)
            .execute();
    }

    
}