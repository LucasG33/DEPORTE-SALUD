import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Sucursales', schema: 'flux' })
export class Sucursal {
    @PrimaryGeneratedColumn({ name: 'sucursal_id' })
    sucursalId: number;

    @Column({ length: 255 })
    direccion: string;

    @Column({ length: 100 })
    ciudad: string;

    @Column({ length: 20 })
    telefono: string;

    @Column({ length: 100 })
    email: string;
}