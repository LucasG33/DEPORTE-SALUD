import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Denuncia } from './denuncia.entity';

@Entity({ name: 'NOMINA' })
export class Nomina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nro_socio', type: 'int', unique: true })
  nroSocio: number;

  @Column({ type: 'varchar', length: 50 })
  categoria: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 15, unique: true })
  dni: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: Date;

  @Column({ name: 'carnet_numero', type: 'varchar', length: 20 })
  carnetNumero: string;

  @Column({ type: 'varchar', length: 100 })
  equipo: string;

  @Column({ type: 'int' })
  edad: number;

  // Relación con denuncias
  /* @OneToMany(() => Denuncia, (denuncia) => denuncia.socio)
  denuncias: Denuncia[]; */
}
