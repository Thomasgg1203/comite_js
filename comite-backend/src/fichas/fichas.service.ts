import { Injectable } from '@nestjs/common';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ficha, fichaDocument } from './model/fichas.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class FichasService {
  constructor(
    @InjectModel(Ficha.name) private readonly fichaModel: Model<fichaDocument>
  ){

  }
  // Los metodos con función asincrona se encuentran en uso
  async create(createFichaDto: CreateFichaDto) {
    return this.fichaModel.create(createFichaDto);
  }

  async findAll() {
    return this.fichaModel.find(Ficha);
  }

  findOne(id: number) {
    return `This action returns a #${id} ficha`;
  }

  update(id: number, updateFichaDto: UpdateFichaDto) {
    return `This action updates a #${id} ficha`;
  }

  async remove(id: number) {
    const _id = new Types.ObjectId(id)
    const response = this.fichaModel.deleteOne({_id})
    return `This action removes a #${id} programa`+ response;
  }
}
