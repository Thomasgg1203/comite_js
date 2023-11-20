import { Injectable } from '@nestjs/common';
import { CreateGestorComiteDto } from './dto/create-gestor-comite.dto';
import { UpdateGestorComiteDto } from './dto/update-gestor-comite.dto';

@Injectable()
export class GestorComiteService {
  create(createGestorComiteDto: CreateGestorComiteDto) {
    return 'This action adds a new gestorComite';
  }

  findAll() {
    return `This action returns all gestorComite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestorComite`;
  }

  update(id: number, updateGestorComiteDto: UpdateGestorComiteDto) {
    return `This action updates a #${id} gestorComite`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestorComite`;
  }
}
