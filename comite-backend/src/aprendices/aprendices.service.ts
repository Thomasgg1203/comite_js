import { Injectable } from '@nestjs/common';
import { CreateAprendiceDto } from './dto/create-aprendice.dto';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';

@Injectable()
export class AprendicesService {

  constructor(@InjectModel(Usuario.name) private readonly aprendizModel: Model<usuarioDocument>){
  }

  async findAll() {
    return await this.aprendizModel.find({roles:'aprendiz'});
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
