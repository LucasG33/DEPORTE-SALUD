import { Controller, Get, Post } from '@nestjs/common';
import { DenunciasService } from '../service/denuncias.service';

@Controller()
export class DenunciasController {
  constructor(private readonly appService: DenunciasService) {}

  @Post('/cargar')
  insertarStock(stock: any){
    return this.appService.insertarStock(stock);
  }


}
