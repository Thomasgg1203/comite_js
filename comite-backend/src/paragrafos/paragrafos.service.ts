import { Injectable } from '@nestjs/common';
import { CreateParagrafoDto } from './dto/create-paragrafo.dto';
import { UpdateParagrafoDto } from './dto/update-paragrafo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { paragrafo, paragrafoDocument } from './model/paragrafos.schema';
import { Model } from 'mongoose';

@Injectable()
export class ParagrafosService {
  constructor (@InjectModel(paragrafo.name) private readonly paragrafoModel: Model<paragrafoDocument>){
  }
  
    create(createparagrafoDto: CreateParagrafoDto) {
      return this.paragrafoModel.create(createparagrafoDto);
    }

  findAll() {
    return `This action returns all paragrafos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paragrafo`;
  }

  update(id: number, updateParagrafoDto: UpdateParagrafoDto) {
    return `This action updates a #${id} paragrafo`;
  }

  remove(id: number) {
    return `This action removes a #${id} paragrafo`;
  }
}
