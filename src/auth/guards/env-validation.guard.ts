import { Injectable, CanActivate, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class EnvValidationGuard implements CanActivate {
  canActivate(): boolean {
    const requiredEnvVars = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_CALLBACK_URL', 'JWT_SECRET'];

    const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

    if (missingVars.length > 0) {
      throw new InternalServerErrorException(
        `Variáveis de ambiente obrigatórias não configuradas: ${missingVars.join(', ')}`,
      );
    }

    return true;
  }
}
