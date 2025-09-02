import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './infraestructura/db-config/database.config';
import { Denuncia } from './base-de-datos/entity/denuncia.entity';
import { Nomina } from './base-de-datos/entity/nomina.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      load: [databaseConfig]
    }),


    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'asociacion-veteranos-futbol',

      useFactory: async (configService: ConfigService) => {
        const config=  configService.get('database-config')
        console.log('CONNECTING TO DATABASE')
        return {
          ...config,
          entities: [Denuncia, Nomina],
          logger: true,
          extra : {
            connectTimeout: 60000
          }

        }
      }
    }),

    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}