import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Todolist - Api Docs')
    .setDescription('Todolist api documentation')
    .setVersion('1.0')
    .addTag('todolist')
    .setExternalDoc('Postman Collection', '/api-json')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPITIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  });

  await app.listen(process.env.API_PORT);

}
bootstrap()


