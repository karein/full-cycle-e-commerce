import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const prodctRepo = dataSource.getRepository('Product');
  await prodctRepo.insert([
    {
      id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
      name: 'Product 1',
      description: 'Description 1 ',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: '66805003-f9a2-4772-b577-d5ff66207707',
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Product 3',
      description: 'Description 3',
      price: 200,
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: 'ef3d9a49-4c73-4192-97dd-55e21c0e2707',
      name: 'Product 4',
      description: 'Description 4',
      price: 200,
      image_url: 'http://localhost:9000/products/4.png',
    },
  ]);

  await app.close();
}
bootstrap();
