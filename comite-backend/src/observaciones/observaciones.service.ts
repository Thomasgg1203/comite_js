import { Injectable } from '@nestjs/common';
import { CreateObservacioneDto } from './dto/create-observacione.dto';
import { UpdateObservacioneDto } from './dto/update-observacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Observacion, observacionDocument } from './model/observaciones.schema';
import { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';

@Injectable()
export class ObservacionesService {
  constructor(
    @InjectModel(Observacion.name) private readonly observacionModel: Model<observacionDocument>,
    @InjectModel(Usuario.name) private readonly aprendizModel: Model<usuarioDocument>
  ){}

  async create(createObservacione: CreateObservacioneDto) {
    const { documento_aprendiz } = createObservacione;
    const aprendiz = await this.aprendizModel.find({
      documento: {$in: documento_aprendiz},
      roles: 'aprendiz'
    });
    const idUsuarios= aprendiz.map((aprendiz) => aprendiz._id );
    const observcion = new this.observacionModel({
      usuarioId:idUsuarios,
      detalles: createObservacione.detalles
    })
    return await observcion.save();
  }

  findAll() {
    return `This action returns all observaciones`;
  }

  findOne(id: string) {
    return `This action returns a #${id} observacione`;
  }

  update(id: string, updateObservacioneDto: UpdateObservacioneDto) {
    return `This action updates a #${id} observacione`;
  }

  remove(id: string) {
    return `This action removes a #${id} observacione`;
  }
}
