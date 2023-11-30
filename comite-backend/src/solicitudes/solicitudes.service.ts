import { Injectable } from '@nestjs/common';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { solicitud, solicitudDocument } from './model/solicitudes.schema';

interface ModelExt<T> extends Model<T>{
  delete:Function;
}

@Injectable()
export class SolicitudesService {
  constructor 
(@InjectModel(solicitud.name) private readonly solicitudModel: ModelExt<solicitudDocument>){
  
}
  create(createSolicitudeDto: CreateSolicitudeDto) {
    return this.solicitudModel.create(createSolicitudeDto);
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
  async remove(id: string) {
    const response = this.solicitudModel.deleteOne({id}).exec();
    return `This action removes a #${id} programa`+ response;
  }
}