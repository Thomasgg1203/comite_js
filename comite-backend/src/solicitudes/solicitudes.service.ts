import { ExecutionContext,Injectable } from '@nestjs/common';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Solicitud, solicitudDocument } from './model/solicitudes.schema';
import { Model } from 'mongoose';
import { AuthsService } from 'src/auths/auths.service';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectModel(Solicitud.name) private readonly solicitudesModel: Model<solicitudDocument>,
    private readonly authService: AuthsService
  ){}

  async create(createSolicitudeDto: CreateSolicitudeDto, context: ExecutionContext) {
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual
    const nombre = this.authService.settingCreadoPor(context);
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual
    createSolicitudeDto.creadoPor = await nombre;
    return this.solicitudesModel.create(createSolicitudeDto);
  }

  findAll() {
    return `This action returns all solicitudes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitude`;
  }

  update(id: number, updateSolicitudeDto: UpdateSolicitudeDto) {
    return `This action updates a #${id} solicitude`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitude`;
  }
}
