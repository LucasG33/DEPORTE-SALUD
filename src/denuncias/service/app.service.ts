import { Injectable } from '@nestjs/common';
/* import { StockRepositoryService } from '../database/service/stock.service';
 */
@Injectable()
export class AppService {
  constructor(/* private readonly stockService: StockRepositoryService */) {}
  
  
  insertarStock(stock) {
    return /* this.stockService.insertarStock(stock) */;
  }

}
