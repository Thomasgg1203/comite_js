import { Injectable } from '@nestjs/common';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { CreateAprendizDto } from 'src/usuarios/dto/create-usuario.dto';
import { FichasService } from 'src/fichas/fichas.service';
import { Ficha, fichaDocument } from 'src/fichas/model/fichas.schema';
import { plainTextToHash } from 'src/auths/utils/handlerBcrypts';

interface ModelExt<T> extends Model<T>{
  delete:Function;
  usuarioAprendizFicha:Function;
}
@Injectable()
export class AprendicesService {

  constructor(
    @InjectModel(Usuario.name) private readonly aprendizModel: ModelExt<usuarioDocument>,
    @InjectModel(Ficha.name) private readonly fichaModel:Model<fichaDocument>
  ){}

  async createAprendiz(CreateAprendiz:CreateAprendizDto):Promise<usuarioDocument>{
    try {

      // en el dto para crearaprendiz, desestructuramos para obtener el campo numero_ficha
      const {contrasenia, ...data} = CreateAprendiz;
      const authAprendiz ={...data, contrasenia:
        await plainTextToHash(contrasenia)
      }  
      const {numero_ficha} = authAprendiz;
      // el objeto ficha busca un elemento coincidente de bbdd 
      const ficha = await this.fichaModel.findOne({numero_ficha});
      // validamos la existencia de la ficha
      if (!ficha) throw new Error('Ficha inexistente')
      // se prosigue con la definicion del objeto usuario-rol:'aprediz'
      const usuario = new this.aprendizModel({
        ...authAprendiz,
        roles:['aprendiz'],
        ficha: ficha._id
      });
      // se retorna el objeto hacía la base de datos por medio del metodo save
    return await usuario.save();
    }catch(error){
      console.log(error);
    }
    //console.log(usuario);
  }

  async findAll():Promise<usuarioDocument[]> {
    // const usuarioId = '2226d508-b579-49ee-9c34-a8fcd8a09d57'; // ID de usuario que deseas consultar
    const usuarioId = 'dda321d3-0a2c-4716-92df-ac0c08e60aae'; // ID de usuario que deseas consultar

    // Paso 1: Consulta el Usuario con la Referencia a la Ficha
    const usuarioConFicha = await this.aprendizModel.usuarioAprendizFicha(usuarioId);
      
    // Paso 2: Verifica el Campo `numero_ficha`
    const numeroFicha = usuarioConFicha.numero_ficha;
    console.log(`Número de Ficha: ${numeroFicha}`);
      
    // Paso 3: Uso en tu Aplicación
    console.log(`Nombre del Usuario: ${usuarioConFicha.nombres}`);
    return await this.aprendizModel.find({roles:'aprendiz'});
  }

  async findOne(documento:string):Promise<any> {
    return await this.aprendizModel.findOne({documento:documento});
  }

  async update(id: string, updateAprendiceDto: UpdateAprendiceDto) {
    return ;
  }

  async remove(id: string) {
    return `This action removes a #${id} aprendice`;
  }
}
