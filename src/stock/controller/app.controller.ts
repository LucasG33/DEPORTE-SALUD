import { Controller, Get, Post } from '@nestjs/common';
import { StockService } from '../service/app.service';

@Controller()
export class StockController {
  constructor(private readonly appService: StockService) {}

  @Post('/cargar')
  insertarStock(stock: any){
    return this.appService.insertarStock(stock);
  }


}
