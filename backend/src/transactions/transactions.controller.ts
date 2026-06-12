import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

type CreateTransactionDto = {
  amountEur: number;
};

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  create(@Body() body: CreateTransactionDto) {
    return this.transactionsService.createTransaction(body.amountEur);
  }
}
