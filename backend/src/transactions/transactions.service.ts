import { Injectable } from '@nestjs/common';
import { RatesService } from 'src/rates/rates.service';
import { randomUUID } from 'crypto';

type Transaction = {
  id: string;
  amountEur: number;
  amountPln: number;
  rate: number;
  timestamp: number;
};

@Injectable()
export class TransactionsService {
  private transcations: Transaction[] = [];

  constructor(private ratesService: RatesService) {}

  async createTransaction(amountEur: number) {
    const rateData = await this.ratesService.getRate();

    const rate = rateData.exchange_rate;
    const amountPln = amountEur * rate;

    const newTransaction: Transaction = {
      id: randomUUID(),
      amountEur,
      amountPln,
      rate,
      timestamp: Date.now(),
    };

    this.transcations.push(newTransaction);

    return newTransaction;
  }
}
