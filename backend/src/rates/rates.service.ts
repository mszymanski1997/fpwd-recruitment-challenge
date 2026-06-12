import { BadGatewayException, Injectable } from '@nestjs/common';

export type ExchangeRateResponse = {
  exchange_rate: number;
};

@Injectable()
export class RatesService {
  private cachedRate: ExchangeRateResponse | null = null;
  private lastFetched: number | null = null;
  private readonly CACHE_TTL = 60000;

  async getRate() {
    const now = Date.now();

    if (
      this.cachedRate &&
      this.lastFetched &&
      now - this.lastFetched < this.CACHE_TTL
    ) {
      return this.cachedRate;
    }

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

    this.cachedRate = rate;
    this.lastFetched = now;

    return rate;
  }
}
