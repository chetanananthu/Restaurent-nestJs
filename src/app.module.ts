import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurentModule } from './restaurent/restaurent.module';
import { Restaurent } from './restaurent/entities/restaurent.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass@word1',
      database: 'nestcrud',
      entities: [Restaurent],
      synchronize: true,
    }),RestaurentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
