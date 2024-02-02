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
      id: 'ab-cd-ef',
      name: 'Product 1',
      description: 'Description 1 ',
      price: 130,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: 'gh-ij-kl',
      name: 'Product 2',
      description: 'Description 2',
      price: 160,
      image_url: 'http://localhost:9000/products/2.png',
    },
  ]);

  await app.close();
}
bootstrap();
