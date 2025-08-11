import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear tipos de identificación
  const types = await prisma.identificationType.createMany({
    data: [
      { name: 'Cédula de Ciudadanía' },
      { name: 'Cédula de Extranjería' },
      { name: 'Pasaporte' },
      { name: 'NIT' },
      { name: 'Tarjeta de Identidad' },
    ],
    skipDuplicates: true,
  });

  // Obtener los tipos para asociar a los usuarios
  const allTypes = await prisma.identificationType.findMany();

  // Crear usuarios
  await prisma.user.createMany({
    data: [
      {
        username: 'usuario1',
        userTypeId: 1,
        identificationTypeId: allTypes[0].id,
        identificationNumber: '123456789',
        firstName: 'Juan',
        lastName: 'Pérez',
        phone: '3001234567',
        email: 'juan1@example.com',
        password: 'password1',
        photo: null,
        identificationDocument: null,
      },
      {
        username: 'usuario2',
        userTypeId: 1,
        identificationTypeId: allTypes[1].id,
        identificationNumber: '987654321',
        firstName: 'Ana',
        lastName: 'Gómez',
        phone: '3009876543',
        email: 'ana2@example.com',
        password: 'password2',
        photo: null,
        identificationDocument: null,
      },
      {
        username: 'usuario3',
        userTypeId: 1,
        identificationTypeId: allTypes[2].id,
        identificationNumber: '555555555',
        firstName: 'Carlos',
        lastName: 'López',
        phone: '3015555555',
        email: 'carlos3@example.com',
        password: 'password3',
        photo: null,
        identificationDocument: null,
      },
      {
        username: 'usuario4',
        userTypeId: 1,
        identificationTypeId: allTypes[3].id,
        identificationNumber: '444444444',
        firstName: 'Luisa',
        lastName: 'Martínez',
        phone: '3024444444',
        email: 'luisa4@example.com',
        password: 'password4',
        photo: null,
        identificationDocument: null,
      },
      {
        username: 'usuario5',
        userTypeId: 1,
        identificationTypeId: allTypes[4].id,
        identificationNumber: '333333333',
        firstName: 'Pedro',
        lastName: 'Ramírez',
        phone: '3033333333',
        email: 'pedro5@example.com',
        password: 'password5',
        photo: null,
        identificationDocument: null,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Datos de prueba insertados');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
