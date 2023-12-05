import { Injectable } from '@nestjs/common';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { solicitud, solicitudDocument } from './model/solicitudes.schema';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';

interface ModelExt<T> extends Model<T>{
  delete:Function;
}

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectModel(solicitud.name) private readonly solicitudModel: ModelExt<solicitudDocument>,
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>
    ){}
    
  async create(createSolicitude: CreateSolicitudeDto): Promise<solicitudDocument> {
    const {documento_aprendices} = createSolicitude;
    const aprendices = await this.usuarioModel.find({
      documento: { $in: documento_aprendices},
      roles: 'aprendiz'
    });
    if (aprendices.length !== documento_aprendices.length) throw new Error('Hay documentos que no corresponden a ningun Aprendiz.')
    const idUsuarios = aprendices.map((aprendiz)=> aprendiz._id)
    const solicitud = new this.solicitudModel({
      aprendices:idUsuarios,
      lugar: createSolicitude.lugar,
      asunto: createSolicitude.asunto,
      pruebas: createSolicitude.pruebas
    });
    console.log(aprendices);
    return await solicitud.save();
  }
  
  async findAll() {
    const solicitud= await this.solicitudModel.find().exec();
    return solicitud;
  }

  async findOne(id: string) {
    return this.solicitudModel.findOne({ id });
  }

  async update(id: string, updateSolicitudeDto: UpdateSolicitudeDto) {
    return this.solicitudModel.findByIdAndUpdate({ id }, updateSolicitudeDto,
      { upsert: true,
        new: true
      });
  }
  remove(id: number) {
    return `This action removes a #${id} solicitude`;
  }
  async aceptSolicitud(id:string){
    const solicitud = await this.solicitudModel.findOneAndUpdate({id},{ estado_solicitud:true },{
      new:true
    });
    return solicitud;
  }
}
