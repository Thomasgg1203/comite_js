import { Injectable } from '@nestjs/common';
import { CreateParagrafoDto } from './dto/create-paragrafo.dto';
import { UpdateParagrafoDto } from './dto/update-paragrafo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { paragrafo, paragrafoDocument } from './model/paragrafos.schema';
import { Model } from 'mongoose';

interface ModelExt<T> extends Model<T>{
  delete:Function;
}
@Injectable()
export class ParagrafosService {
  constructor (@InjectModel(paragrafo.name) private readonly paragrafoModel: ModelExt<paragrafoDocument>){
  }
  
    create(createparagrafoDto: CreateParagrafoDto) {
      return this.paragrafoModel.create(createparagrafoDto);
    }

  async findAll() {
    const paragrafo= await this.paragrafoModel.find().exec();
    return paragrafo;
  }

  async findOne(id: string) {
    return this.paragrafoModel.findOne({ id });
  }

  async update(id: string, UpdateParagrafoDto: UpdateParagrafoDto) {
    return this.paragrafoModel.findOneAndUpdate({ id }, UpdateParagrafoDto, {
      upsert: true,
      new: true
    });
  }

  async remove(id: string) {
    const response = await this.paragrafoModel.delete({ id });
    return response
  }
}
