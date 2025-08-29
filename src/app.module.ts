import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stock-general/controller/app.controller';
import { StockService } from './stock-general/service/app.service';
import { StockRepository } from './stock-general/database/repository/stock.repository';
import { StockRepositoryService } from './stock-general/database/service/stock.service';
// Importa tus entidades aquí
import { Sucursal } from './entity/sucursales.entity';
import { Producto } from './entity/productos.entity';
import { Stock } from './entity/stock.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'flux',
      entities: [Sucursal, Producto, Stock],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Sucursal, Producto, Stock]),
  ],
  controllers: [StockController],
  providers: [StockService, StockRepositoryService],
})
export class AppModule {}