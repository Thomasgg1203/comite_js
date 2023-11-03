import { Injectable } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { articulo, articuloDocument } from './model/articulos.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticulosService {
constructor (@InjectModel(articulo.name) private readonly articuloModel: Model<articuloDocument>){

}

  create(createArticuloDto: CreateArticuloDto) {
    return this.articuloModel.create(createArticuloDto);
  }

  findAll() {
    return `This action returns all articulos`;
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
