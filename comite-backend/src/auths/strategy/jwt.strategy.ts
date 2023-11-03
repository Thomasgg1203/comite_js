import { ExtractJwt,Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')

        }) 
    }
    async validation(payload:{id:string,documento:string}){
        return { usuarioId:payload.id, usuarioDocumento:payload.documento};
    }
}
