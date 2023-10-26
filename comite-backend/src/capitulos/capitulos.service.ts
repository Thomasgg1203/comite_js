import { Injectable } from '@nestjs/common';
import { CreateCapituloDto } from './dto/create-capitulo.dto';
import { UpdateCapituloDto } from './dto/update-capitulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { capitulo, capituloDocument } from './model/capitulos.schema';
import { Model } from 'mongoose';


@Injectable()
export class CapitulosService {
  constructor(@InjectModel(capitulo.name) private readonly capituloModel: Model<capituloDocument>){

  }

  create(createCapituloDto: CreateCapituloDto) {
    return this.capituloModel.create(createCapituloDto)
  }

  findAll() {
    return `This action returns all capitulos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} capitulo`;
  }

  update(id: number, updateCapituloDto: UpdateCapituloDto) {
    return `This action updates a #${id} capitulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} capitulo`;
  }
}
