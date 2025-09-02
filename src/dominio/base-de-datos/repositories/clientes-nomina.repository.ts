import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Nomina } from "../entity/nomina.entity";

@Injectable()
export class NominaRepository {
  constructor(
    @InjectRepository(Nomina, 'asociacion-veteranos-futbol')
    private readonly repository: Repository<Nomina>,
  ) {}

  // Ejemplo de método
  async findAll(): Promise<Nomina[]> {
    return this.repository.find();
  }
}