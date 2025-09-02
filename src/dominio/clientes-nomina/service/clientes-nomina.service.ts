import { Injectable } from '@nestjs/common';
/* import { StockRepositoryService } from '../database/service/stock.service';
 */
@Injectable()
export class NominaService {
  constructor(/* private readonly stockService: StockRepositoryService */) {}
  
  
  insertarCliente(stock) {
    return /* this.stockService.insertarStock(stock) */;
  }

}
