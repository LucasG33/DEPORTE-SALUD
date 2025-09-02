import { Module } from '@nestjs/common';
import { DenunciasController } from './controller/denuncias.controller';
import { DenunciasService } from './service/denuncias.service';

@Module({
    imports: [],
    controllers: [DenunciasController],
    providers: [DenunciasService],
})
export class DenunciasModule { }