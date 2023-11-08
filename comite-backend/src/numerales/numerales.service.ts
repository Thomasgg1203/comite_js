import { Injectable } from '@nestjs/common';
import { CreateNumeraleDto } from './dto/create-numerale.dto';
import { UpdateNumeraleDto } from './dto/update-numerale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { numeral, numeralDocument } from './model/numerales.schema';
import { Model } from 'mongoose';
import { articulo, articuloDocument } from 'src/articulos/model/articulos.schema';

interface ModelExt<T> extends Model<T>{
  delete:Function;
  findAllNumerales:Function;
}

@Injectable()
export class NumeralesService {

  constructor(@InjectModel(numeral.name) private readonly numeralModel: ModelExt<numeralDocument>,@InjectModel(articulo.name) private readonly articuloModel: ModelExt<articuloDocument>){
  } 
  create(createNumeraleDto: CreateNumeraleDto) {
    return this.numeralModel.create(createNumeraleDto);
  }

  async findAll() {
    return this.numeralModel.findAllNumerales();
  }

  async findOne(id: string) {
    return this.numeralModel.findOne({id});
  }

  async update(id: string, updateNumeraleDto: UpdateNumeraleDto) {
    return this.numeralModel.findOneAndUpdate({id},updateNumeraleDto,{
      upsert: true,
      new: true
    });
  }

  async remove(id: string) {
    const response = await this.numeralModel.delete({id});
    return response
  }
}
