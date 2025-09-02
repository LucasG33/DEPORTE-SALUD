import { Module } from '@nestjs/common';
import { DenunciasController } from './controller/denuncias.controller';
import { DenunciasService } from './service/denuncias.service';
import { NominaController } from '../clientes-nomina/controller/clientes-nomina.controller';

@Module({
    imports: [],
    controllers: [NominaController],
    providers: [DenunciasService],
})
export class DenunciasModule { }