import { Module } from '@nestjs/common';
import { RatesModule } from 'src/rates/rates.module';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [RatesModule],
})
export class TransactionsModule {}
