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

  async findAll():Promise<usuarioDocument[]> {
    return await this.aprendizModel.find({roles:'aprendiz'});
  }

  async findOne(documento:string):Promise<any> {
    return await this.aprendizModel.findOne({documento:documento});
  }

  async update(id: number, updateAprendiceDto: UpdateAprendiceDto) {
    return `This action updates a #${id} aprendice`;
  }

  async remove(id: number) {
    return `This action removes a #${id} aprendice`;
  }
}
