import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatesModule } from './rates/rates.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [RatesModule, ConfigModule.forRoot({ isGlobal: true }), TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
