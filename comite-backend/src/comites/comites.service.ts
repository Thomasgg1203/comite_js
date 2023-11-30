import { Injectable } from '@nestjs/common';
import { CreateComiteDto } from './dto/create-comite.dto';
import { UpdateComiteDto } from './dto/update-comite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comites, comiteDocument } from './model/comites.schema';
import { Model } from 'mongoose';

@Injectable()
export class ComitesService {
  constructor(@InjectModel(Comites.name) private readonly comiteModel: Model<comiteDocument> ){}
  
  create(createComiteDto: CreateComiteDto) {
    return ;
  }

  findAll() {
    return `This action returns all comites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comite`;
  }

  update(id: number, updateComiteDto: UpdateComiteDto) {
    return `This action updates a #${id} comite`;
  }

  remove(id: number) {
    return `This action removes a #${id} comite`;
  }
}
