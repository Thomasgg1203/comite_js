import { Injectable } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { articulo, articuloDocument } from './model/articulos.schema';
import { Model, Types } from 'mongoose';
import { paragrafo, paragrafoDocument } from 'src/paragrafos/model/paragrafos.schema';
import { types } from 'util';
import { capitulo, capituloDocument } from 'src/capitulos/model/capitulos.schema';
import { numeral, numeralDocument } from 'src/numerales/model/numerales.schema';

interface ModelExt<T> extends Model<T>{
  delete:Function;
  findAllArticulos:Function;
}
@Injectable()
export class ArticulosService {
constructor 
(@InjectModel(articulo.name) private readonly articuloModel: ModelExt<articuloDocument>,
  @InjectModel(paragrafo.name) private readonly paragrafoModel: ModelExt<paragrafoDocument>,
  @InjectModel(capitulo.name) private readonly capituloModel: ModelExt<capituloDocument>,
  @InjectModel(numeral.name) private readonly numeralModel: ModelExt<numeralDocument>){

}

  create(createArticuloDto: CreateArticuloDto) {
    return this.articuloModel.create(createArticuloDto);
  }

  async findAll() {
    return this.articuloModel.findAllArticulos();
  }

   async findOne(id: string) {
    return this.articuloModel.findOne({ id });
  }

  async update(id: string, updateArticuloDto: UpdateArticuloDto) {
    return this.articuloModel.findOneAndUpdate({ id }, updateArticuloDto, {
      upsert: true,
      new: true
    });
  }
  async remove(id: string) {
    const response = await this.articuloModel.delete({ id });
    return response
  }
}
