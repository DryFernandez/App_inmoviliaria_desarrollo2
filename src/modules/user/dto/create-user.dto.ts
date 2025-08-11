import { IsString, IsOptional, IsNotEmpty, IsEmail, IsNumber, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNumber()
  userTypeId: number; // id de UserType ('normal' o 'empresa')

  @IsNumber()
  identificationTypeId: number;

  @IsString()
  @IsNotEmpty()
  identificationNumber: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsString()
  identificationDocument?: string;

  // Campos de empresa
  @ValidateIf((o) => o.userTypeId === 2) // 2 = empresa
  @IsString()
  @IsNotEmpty()
  companyName?: string; // Razón social

  @ValidateIf((o) => o.userTypeId === 2)
  @IsString()
  @IsNotEmpty()
  companyTradeName?: string; // Nombre comercial

  @ValidateIf((o) => o.userTypeId === 2)
  @IsString()
  @IsNotEmpty()
  companyLegalType?: string; // Tipo de sociedad

  @ValidateIf((o) => o.userTypeId === 2)
  @IsString()
  @IsNotEmpty()
  companyLegalStatus?: string; // Estado legal
}
