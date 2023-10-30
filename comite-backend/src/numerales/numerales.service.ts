import { Injectable } from '@nestjs/common';
import { CreateNumeraleDto } from './dto/create-numerale.dto';
import { UpdateNumeraleDto } from './dto/update-numerale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { numeral, numeralDocument } from './model/numerales.schema';
import { Model } from 'mongoose';

@Injectable()
export class NumeralesService {

  constructor(@InjectModel(numeral.name) private readonly numeralModel: Model<numeralDocument>){
  } 
  create(createNumeraleDto: CreateNumeraleDto) {
    return this.numeralModel.create(createNumeraleDto);
  }

  findAll() {
    return `This action returns all numerales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} numerale`;
  }

  update(id: number, updateNumeraleDto: UpdateNumeraleDto) {
    return `This action updates a #${id} numerale`;
  }

  remove(id: number) {
    return `This action removes a #${id} numerale`;
  }
}
