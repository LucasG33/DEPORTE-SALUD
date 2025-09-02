import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "DENUNCIAS", schema: "asociacion_veteranos_futbol" })
export class Denuncia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nombre_titular_poliza: string;

    @Column({ length: 10 })
    dni: string;

    @Column({ length: 10 })
    domicilio: string;

    @Column({ length: 10 })
    localidad: string;

    @Column({ length: 10 })
    provincia: string;

    @Column({ length: 10 })
    cod_postal: string;

    @Column({ length: 15 })
    telefono: string;

    @Column({ length: 50 })
    actividad_habitual: string;

    @Column({ length: 10 })
    cbu_titular_poliza: string;

    @Column({ length: 12 })
    cuit_cuil: string;

    @Column({ type: "timestamp" })
    fecha_siniestro: Date;

    @Column({ type: "timestamp" })
    horario_inicio_jornada: Date;

    @Column({ type: "timestamp" })
    hora_siniestro: Date;

    @Column({ length: 20 })
    actividad_siniestro: string;

    @Column({ length: 20 })
    lugar_siniestro: string;

    @Column({ length: 255 })
    circunstancias_siniestro: string;

    @Column({ length: 255 })
    tareas_al_momento_siniestro: string;

    @Column({ type: "timestamp" })
    fecha_abandono_trabajo: Date;

    @Column({ length: 255 })
    tarea_habitual: string;

    @Column({ length: 50 })
    lesion_sufrida: string;

    @Column({ type: "blob" })
    nombre_medico_atencion: Buffer;

    @Column({ type: "blob" })
    nombre_medico_cabecera: Buffer;

    @Column({ type: "blob" })
    accidentes_anteriores: Buffer;

    @Column({ type: "timestamp" })
    lugar_fecha_denuncia: Date;

    @Column({ length: 50, nullable: true })
    autoridad_que_recibe_denuncia: string;
}