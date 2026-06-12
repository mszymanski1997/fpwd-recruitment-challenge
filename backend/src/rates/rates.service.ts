import { BadGatewayException, Injectable } from '@nestjs/common';

export type ExchangeRateResponse = {
  exchange_rate: number;
};

@Injectable()
export class RatesService {
  async getRate() {
    if (!process.env.DUMMY_API_KEY || !process.env.DUMMY_API_URL) {
      throw new Error('Missing environment variables in .env file');
    }

    const response = await fetch(process.env.DUMMY_API_URL, {
      headers: {
        'x-api-key': process.env.DUMMY_API_KEY,
      },
    });

    if (!response.ok) {
      throw new BadGatewayException(
        'Failed to fetch exchange rate from external API',
      );
    }

    const rate = (await response.json()) as ExchangeRateResponse;
    return rate;
  }
}
