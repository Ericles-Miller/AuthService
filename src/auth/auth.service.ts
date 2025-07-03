import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GoogleUserDto } from './strategies/google/google-user.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  loginWithGoogle(user: GoogleUserDto) {
    const payload = {
      email: user.email,
      sub: user.googleId,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
      roles: ['user'],
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
      },
    };
  }
}
