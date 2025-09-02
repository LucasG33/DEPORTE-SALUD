import { Module } from '@nestjs/common';
import { DatabaseModule } from './base-de-datos/db.module';
import { NominaModule } from './clientes-nomina/clientes-nomina.module';
import { DenunciasModule } from './denuncias/denuncias.module';

@Module({
  imports: [DatabaseModule, NominaModule, DenunciasModule],
  providers: [],
  exports: [],
})
export class DomainModule {}