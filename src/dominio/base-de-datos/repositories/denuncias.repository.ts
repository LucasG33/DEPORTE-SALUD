import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Denuncia } from "../entity/denuncia.entity";
import { Repository } from "typeorm";

@Injectable()
export class DenunciasRepository {
  constructor(
    @InjectRepository(Denuncia, 'asociacion-veteranos-futbol')
    private readonly repository: Repository<Denuncia>,
  ) {}

  // Ejemplo de método
  async findAll(): Promise<Denuncia[]> {
    return this.repository.find();
  }
}