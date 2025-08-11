import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { IdentificationTypeModule } from './modules/identification-type/identification-type.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, IdentificationTypeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
