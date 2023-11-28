import { Body, HttpException, HttpStatus, Injectable, ExecutionContext  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { registrarUsuarioDto } from './dto/registrar-usuario.dto';
import { compareTextToHash, plainTextToHash } from './utils/handlerBcrypts';
import { ingresarUsuarioDto } from './dto/ingresar-usuario.dto ';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthsService {
    constructor(
        private readonly jwtService:JwtService,
        @InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>
    ){}
    
    // registrar esta deshabilitado
    public async registrar(usuarioRegistrarBody:registrarUsuarioDto){
        // des-estructuración de objetos JS definiendo variables que contienen los atributos propios de un obj.Javascript especifico
        const {contrasenia, ...usuario}= usuarioRegistrarBody;
        // luego en un nuevo objeto, asignamos los valores de la variable 'usuario' y 'contrasenia' desestructurados
        const authUsuario = {...usuario, contrasenia:
            //  pero, 'contrasenia' la transformamos por medio de la funcion plainTextToHash para encriptarla
            await plainTextToHash(contrasenia)   
        }
        // retornamos este nuevo objeto que tiene el atributo 'contrasenia' encriptada.
        return this.usuarioModel.create(authUsuario);
    }
    // & solo se usa de prueba //

    public async ingresar(usuarioIngresarBody:ingresarUsuarioDto){
        // definimos un objeto, en base a los datos des-estructurados del objeto tratado en cuestion, 
        // que en este caso es del ingresarUsuarioDto. 
        const {contrasenia}=usuarioIngresarBody;
        // definimos un objeto, que nos promete un usuario, 
        //por medio de la busqueda del campo documento que coincida con el campo 'documento' de nuestro archivo de mongoDB   
        const userValidate= await this.usuarioModel.findOne({documento:usuarioIngresarBody.documento});
        // Si nuestro usuario no es validado correctamente por la comparación de docuemnto, arrojamos una escepción HTTP
        if (!userValidate) throw new HttpException('NOT_FOUND',HttpStatus.NOT_FOUND);
        
        // de lo contrario creamos un objeto que, por medio del usuario validado nos permitira comparar el campo contrasenia
        // gracias a nuestro manejador de hashes, así podremos desencriptar y comparar
        const isValidate = await compareTextToHash(contrasenia, userValidate.contrasenia);
        //Si el campo no coincide con el de nuestro archivo arrojamos una escepción HTTP
        if (!isValidate) throw new HttpException('NOT_VALID', HttpStatus.UNAUTHORIZED)
        
        // de lo contrario creamos un objeto Usuario y lo convertimos a objeto de TypeScript, por medio del usuario validado  
        const Usuario = userValidate.toObject();
        // para luego omitir, de este nuevo objeto, la propiedad contrasenia que viene de nuestro campo contrasenia, y así retornarlo seguramente
        delete Usuario.contrasenia;

        // definimos que datos enviamos a la estructura del JWT
        const payload = {
            // _TODO_:cambiar el _id de mongoose, por el id propio de nuestra logica 'id'
            id: Usuario._id, 
            documento: Usuario.documento 
        };

        const token = this.jwtService.sign(payload);
        const data = {
            token,
            user:Usuario
        };
        return data;
    }
    
    //----------------------------------------------------------------------------
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual
    public async settingCreadoPor(context: ExecutionContext): Promise<string | null> {
        const req = context.switchToHttp().getRequest;
        
        // obtenemos el atributo rol del usuario autentificado por medio del request
        // const { nombre } = req.user.
        
        console.log("________",req,"________"); 
        return null
    }
    // TODO: implementación para poder sacar el usuario.nombre de la sesion actual

}
