import { Injectable } from '@nestjs/common';
import { CreateGestorGrupoDto } from './dto/create-gestor-grupo.dto';
import { UpdateGestorGrupoDto } from './dto/update-gestor-grupo.dto';

@Injectable()
export class GestorGrupoService {
  create(createGestorGrupoDto: CreateGestorGrupoDto) {
    return 'This action adds a new gestorGrupo';
  }

  findAll() {
    return `This action returns all gestorGrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestorGrupo`;
  }

  update(id: number, updateGestorGrupoDto: UpdateGestorGrupoDto) {
    return `This action updates a #${id} gestorGrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestorGrupo`;
  }
}
