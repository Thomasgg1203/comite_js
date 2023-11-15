import { Injectable } from '@nestjs/common';
import { CreateCapituloDto } from './dto/create-capitulo.dto';
import { UpdateCapituloDto } from './dto/update-capitulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { capitulo, capituloDocument } from './model/capitulos.schema';
import { Model } from 'mongoose';
import { articulo, articuloDocument } from 'src/articulos/model/articulos.schema';

interface ModelExt<T> extends Model<T>{
  delete:Function;
  findAllCapitulos:Function;
}
@Injectable()
export class CapitulosService {
  constructor(@InjectModel(capitulo.name) private readonly capituloModel: ModelExt<capituloDocument>,
  @InjectModel(articulo.name) private readonly articuloModel: ModelExt<articuloDocument>){

  }

  create(createCapituloDto: CreateCapituloDto) {
    return this.capituloModel.create(createCapituloDto)
  }

  async findAll() {
    const capitulos = await this.capituloModel.find().exec();
    return capitulos;
  }

  async findOne(id: string) {
    return this.capituloModel.findOne({ id });
  }

  async update(id: string, updateCapituloDto: UpdateCapituloDto) {
    return this.articuloModel.findOneAndUpdate({ id }, updateCapituloDto, {
      upsert: true,
      new: true
    });
  }
  async remove(id: string) {
    const response = await this.capituloModel.delete({ id });
    return response
  }
}
