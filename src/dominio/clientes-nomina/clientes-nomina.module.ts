import { Module } from '@nestjs/common';
import { NominaController } from './controller/clientes-nomina.controller';
import { NominaService } from './service/clientes-nomina.service';

@Module({
  imports: [],
   controllers: [NominaController],
  providers: [NominaService],
})
export class NominaModule {}