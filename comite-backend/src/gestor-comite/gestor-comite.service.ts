import { Inject, Injectable } from '@nestjs/common';
import { CreateGestorComiteDto } from './dto/create-gestor-comite.dto';
import { UpdateGestorComiteDto } from './dto/update-gestor-comite.dto';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GestorComiteService {
  constructor(
    @InjectModel(Usuario.name) private readonly gestorComiteModel:Model<usuarioDocument>
    ){}

  create(createGestorComiteDto: CreateGestorComiteDto) {
    return 'This action adds a new gestorComite';
  }

  async findAll():Promise<usuarioDocument[]> {
    return await this.gestorComiteModel.find({roles: 'gestor-comite'}).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} gestorComite`;
  }

  update(id: number, updateGestorComiteDto: UpdateGestorComiteDto) {
    return `This action updates a #${id} gestorComite`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestorComite`;
  }
}
