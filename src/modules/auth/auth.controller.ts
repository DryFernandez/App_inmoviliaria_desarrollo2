import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.validateLogin(loginDto.username, loginDto.password);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    // Asegurar que userTypeId siempre esté presente (por defecto 1 = normal)
    const user = await this.userService.create({
      ...registerDto,
      userTypeId: registerDto.userTypeId ?? 1,
    });
    return { message: 'Usuario registrado', user };
  }
}
