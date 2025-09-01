import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stock/controller/app.controller';
import { StockService } from './stock/service/app.service';
import { StockRepositoryService } from './stock/database/service/stock.service';
import { Sucursal } from './db/entity/sucursales.entity';
import { Producto } from './db/entity/productos.entity';
import { Stock } from './db/entity/stock.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './db/config/database.config';
import { StockRepository } from './stock/database/repository/stock.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      load: [databaseConfig]
    }),

    /* TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'flux',
      entities: [Sucursal, Producto, Stock],
      synchronize: false, 
    }),
    TypeOrmModule.forFeature([Sucursal, Producto, Stock]), */

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'flux',

      useFactory: async (configService: ConfigService) => {
        const config=  configService.get('database-config')
        console.log('CONNECTING TO DATABASE')
        return {
          ...config,
          entities: [Sucursal, Producto, Stock],
          logger: true,
          extra : {
            connectTimeout: 60000
          }

        }
      }
    }),

    
  ],
  controllers: [StockController],
  providers: [StockService, StockRepositoryService, StockRepository, Logger],
})
export class AppModule {}