import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
        constructor(
            private readonly userService: UserService,
            private jwtService: JwtService
        ){

        }
        generateJwt(payload){
            return this.jwtService.sign(payload, {secret:process.env.JWT_SECRET});
        }

    async getUserDataFromGoogle(code:string){

        const result = await fetch (`${process.env.GOOGLE_PROFILE_URL}${code}`);
        
        return await result.json();


    }


    async singIn(user: UserEntity){
        const registeredUser = await this.userService.findOneByEmail(user.email);
        if(registeredUser ){
            return this.generateJwt(JSON.parse(JSON.stringify (registeredUser)));

        }else{
            const newUser = await this.signUp(user);
            return this.generateJwt(JSON.parse(JSON.stringify(newUser)));

        }
    }
    async signUp (user: UserEntity) : Promise<UserEntity>{
        const newUser = await this.userService.create(user);
        return newUser;
    }
    
}
