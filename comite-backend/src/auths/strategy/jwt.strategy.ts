import { ExtractJwt,Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, usuarioDocument } from 'src/usuarios/model/usuario.schema';
import { Model } from 'mongoose';

// Se genera un objeto exportado que se puede inyectar como dependencia, el cual tendra la directiva a seguir para validar el JWT
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    // inicializamos el constructor, inyectando el modelo 'Usuario' en esta clase, se almacena en la propiedad 'usuarioModel' con el tipo Model<UsuarioDocument>
    constructor (@InjectModel(Usuario.name) private readonly usuarioModel: Model<usuarioDocument>){
    // Se llama al construtor de la clase padre PassportStrategy
        super({
            // en estos parametros se define que se extraera el jwt de la cabecera del Auth con el esquema JWT
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // estas son configuraciones, nos pregunta si ignoraremos tokens ya usados previamente y el secret
            ignoreExpiration:false,
            secretOrKey: process.env.SECRET_KEY,
        });
    }
    // metodo asincrono pre-escrito por interfaz IAuthStrategy, valida el obj payload compuesto de id y documento de usuario 
    async validate(payload:{id:string,documento:string}){
        // una vez con el id, buscamos el usuario
        const usuario = await this.usuarioModel.findById(payload.id);
        // y retornamos el obj usuario que equivale al 'Usuario'
        return usuario;
    }
}
