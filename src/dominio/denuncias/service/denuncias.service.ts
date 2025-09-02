import { Injectable } from '@nestjs/common';
/* import { StockRepositoryService } from '../database/service/stock.service';
 */
@Injectable()
export class DenunciasService {
  constructor(/* private readonly stockService: StockRepositoryService */) {}
  
  
  insertarStock(stock) {
    return /* this.stockService.insertarStock(stock) */;
  }

}
