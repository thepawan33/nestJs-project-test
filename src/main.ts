import { NestFactory } from '@nestjs/core';
import { rootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(rootModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
