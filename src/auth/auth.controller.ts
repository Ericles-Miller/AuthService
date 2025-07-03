import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { EnvValidationGuard } from './guards/env-validation.guard';

@Controller('auth')
@UseGuards(EnvValidationGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Este endpoint inicia o fluxo OAuth do Google
    // O guard redireciona automaticamente para o Google
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    // Este endpoint é chamado após o usuário fazer login no Google
    // req.user contém os dados do usuário retornados pelo Google
    return this.authService.loginWithGoogle(req.user);
  }
}
