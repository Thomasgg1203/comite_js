import { Injectable } from '@nestjs/common';
import { CreateComiteDto } from './dto/create-comite.dto';
import { UpdateComiteDto } from './dto/update-comite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comites, comiteDocument } from './model/comites.schema';
import { Model } from 'mongoose';
import { Solicitude } from 'src/solicitudes/entities/solicitude.entity';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { solicitud, solicitudDocument } from 'src/solicitudes/model/solicitudes.schema';

@Injectable()
export class ComitesService {
  constructor(
    @InjectModel(Comites.name) private readonly comiteModel: Model<comiteDocument>,
    @InjectModel(Solicitude.name) private readonly solicitudModel: Model<solicitudDocument>,
    @InjectModel(Usuario.name) private readonly aprendizModel: Model<usuarioDocument>
    ){}
  //aquí se crea un comite que retorna un objeto que por medio del populate trae el nombre y apellido de la persona
  //me dice si requiere un servicio especeifico para ello 
  async create(createComite: CreateComiteDto) {
    const { documento_aprendiz } = createComite;
    const aprendiz = await this.aprendizModel.find({
      documento: { $in: documento_aprendiz },
      roles: 'aprendiz'
    });
    const idUsuarios = aprendiz.map((aprendiz) => aprendiz._id);
    const comite = new this.comiteModel({
      usuarioId:idUsuarios,
      nombre: createComite.nombre,
      objetivo_reunion: createComite.objetivo_reunion,
      lugar: createComite.lugar,
      fecha_inicio: createComite.fecha_inicio,
      detalles: createComite.detalles
    })
    const comite_saved = await comite.save()
    const comite_data= await this.comiteModel
    .findById(comite)
    .populate('usuarioId', 'nombres apellidos');
    const comiteAprendiz= {
      comite:comite_saved,
      comite_data
    };
    return comiteAprendiz;
  }

  async findAll() {
    const comites = await this.comiteModel.find().exec();
    return comites;
  }

  findOne(id: string) {
    return `This action returns a #${id} comite`;
  }

  update(id: string, updateComiteDto: UpdateComiteDto) {
    return `This action updates a #${id} comite`;
  }

  remove(id: string) {
    return `This action removes a #${id} comite`;
  }
}
