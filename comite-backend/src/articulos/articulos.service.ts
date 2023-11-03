import { Injectable } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { articulo, articuloDocument } from './model/articulos.schema';
import { Model } from 'mongoose';
import { paragrafo, paragrafoDocument } from 'src/paragrafos/model/paragrafos.schema';

interface ModelExt<T> extends Model<T>{
  Delete:Function;
  findAllArticulos:Function;
}
@Injectable()
export class ArticulosService {
constructor (@InjectModel(articulo.name) private readonly articuloModel: ModelExt<articuloDocument>,
  @InjectModel(paragrafo.name) private readonly paragrafoModel: ModelExt<paragrafoDocument>){

}

  create(createArticuloDto: CreateArticuloDto) {
    return this.articuloModel.create(createArticuloDto);
  }

  async findAll() {
    return await this.articuloModel.findAllArticulos();
  }

  findOne(id: number) {
    return `This action returns a #${id} articulo`;
  }

  update(id: number, updateArticuloDto: UpdateArticuloDto) {
    return `This action updates a #${id} articulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} articulo`;
  }
}
