import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Denuncia } from './entity/denuncia.entity';
import { Nomina } from './entity/nomina.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'src/infraestructura/db-config/database.config';

/* import { DenunciaService } from './services/denuncia.service'; */
// import { OtraEntidadService } from './services/otra-entidad.service';

const SERVICES = []
const REPOSITORIES = []

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: false,
            load: [databaseConfig],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            name: 'asociacion-veteranos-futbol',
            useFactory: async (configService: ConfigService) => {
                const config = configService.get('database-config');
                console.log('CONNECTING TO DATABASE');
                return {
                    ...config,
                    entities: [Denuncia, Nomina],
                    logger: true,
                    extra: {
                        connectTimeout: 60000,
                    },
                };
            },
        }),
        TypeOrmModule.forFeature([
            Denuncia,
            Nomina,
        ]),
    ],
    providers: [
        ...SERVICES,
        ...REPOSITORIES,
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule { }