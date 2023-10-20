import { Injectable } from '@nestjs/common';
import { CreateAprendiceDto } from './dto/create-aprendice.dto';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { InjectModel } from '@nestjs/mongoose';
import { aprendiz, aprendizDocument } from './model/aprendices.schema';
import { Model } from 'mongoose';

@Injectable()
export class AprendicesService {

  constructor(@InjectModel(aprendiz.name) private  readonly aprendizModel: Model<aprendizDocument>){
    
  }

  create(createAprendiceDto: CreateAprendiceDto) {
    return this.aprendizModel.create(createAprendiceDto)
  }

  findAll() {
    return `This action returns all aprendices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aprendice`;
  }

  update(id: number, updateAprendiceDto: UpdateAprendiceDto) {
    return `This action updates a #${id} aprendice`;
  }

  remove(id: number) {
    return `This action removes a #${id} aprendice`;
  }
}
