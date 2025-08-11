export class User {
  id: number;
  username: string;
  userTypeId: number;
  identificationTypeId: number;
  identificationNumber: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  photo?: string;
  identificationDocument?: string;
  // Campos de empresa
  companyName?: string; // Razón social
  companyTradeName?: string; // Nombre comercial
  companyLegalType?: string; // Tipo de sociedad
  companyLegalStatus?: string; // Estado legal
}
