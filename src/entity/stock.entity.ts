import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Sucursal } from './sucursales.entity';
import { Producto } from './productos.entity';

@Entity({ name: 'Stock', schema: 'flux' })
export class Stock {
  @PrimaryColumn({ name: 'sucursal_id' })
  sucursalId: number;

  @PrimaryColumn({ name: 'producto_id' })
  productoId: number;

  @Column({ type: 'int', default: 0 })
  cantidad: number;

  @Column({ name: 'fecha_actualizacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fechaActualizacion: Date;

  @ManyToOne(() => Sucursal, { eager: true })
  @JoinColumn({ name: 'sucursal_id' })
  sucursal: Sucursal;

  @ManyToOne(() => Producto, { eager: true })
  @JoinColumn({ name: 'producto_id' })
  producto: Producto;
} 