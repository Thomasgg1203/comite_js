import { Injectable } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Programas, programasDocument } from './model/programas.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProgramasService {

  constructor(
    @InjectModel(Programas.name) private readonly programaModel: Model<programasDocument>
  ){

  }
  // Los metodos con función asincrona se encuentran en uso
  async create(createProgramaDto: CreateProgramaDto) {
    return await this.programaModel.create(createProgramaDto);
  }

  async findAll() {
    return await this.programaModel.find().exec();
  }

  async findOne(id: string) {
    const programa = await this.programaModel.findOne({id});
    return programa;
  }

  update(id: string, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

  async remove(id: string) {
    const _id = new Types.ObjectId(id)
    const response = this.programaModel.deleteOne({_id})
    return `This action removes a #${id} programa`+ response;
  }
}
