import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Productos', schema: 'flux' })
export class Producto {
  @PrimaryGeneratedColumn({ name: 'producto_id' })
  productoId: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  categoria: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ length: 100 })
  proveedor: string;
}