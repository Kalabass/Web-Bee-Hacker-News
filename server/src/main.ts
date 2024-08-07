import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const clientUrl =
      configService.get('CLIENT_URL') || 'http://localhost:3000';
    const port = configService.get('PORT') || 5252;

    app.enableCors({
      origin: clientUrl,
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
      credentials: true,
    });

    await app.listen(port);

    console.log(`Application is running on: ${clientUrl}`);
    console.log(`Server started on http://localhost:${port}`);
  } catch (e) {
    console.error('Error starting the application:', e.message);
  }
}
bootstrap();
