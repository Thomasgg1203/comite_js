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
  create(createProgramaDto: CreateProgramaDto) {
    return this.programaModel.create(CreateProgramaDto);
  }

  async findAll() {
    return this.programaModel.find(Programas);
  }

  findOne(id: number) {
    return this.programaModel.findOne(Programas);
  }

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

  async remove(id: string) {
    const _id = new Types.ObjectId(id)
    const response = this.programaModel.deleteOne({_id})
    return `This action removes a #${id} programa`+ response;
  }
}
