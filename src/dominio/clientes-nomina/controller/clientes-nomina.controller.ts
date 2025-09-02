import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NominaService } from '../service/clientes-nomina.service';

@Controller('/nomina')
export class NominaController {
  constructor(private readonly nominaService: NominaService) {}

  @Post('/cargar')
  insertarCliente(cliente: any){
    return this.nominaService.insertarCliente(cliente);
  }

/*   @Get()
  obtenerTodos() {
    return this.nominaService.obtenerTodos();
  }

  @Get('/:id')
  obtenerPorId(@Param('id') id: string) {
    return this.nominaService.obtenerPorId(id);
  }

  @Put('/:id')
  actualizarCliente(@Param('id') id: string, @Body() cliente: any) {
    return this.nominaService.actualizarCliente(id, cliente);
  }

  @Delete('/:id')
  eliminarCliente(@Param('id') id: string) {
    return this.nominaService.eliminarCliente(id);
  }
 */

}
