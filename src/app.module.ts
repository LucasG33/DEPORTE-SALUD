import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './denuncias/controller/app.controller';
import { AppService } from './denuncias/service/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './infrastructure/db-config/database.config';

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
          entities: [],
          logger: true,
          extra : {
            connectTimeout: 60000
          }

        }
      }
    }),

    
  ],
  controllers: [AppController],
  providers: [ AppService,/*  StockRepositoryService, StockRepository, */ Logger],
})
export class AppModule {}