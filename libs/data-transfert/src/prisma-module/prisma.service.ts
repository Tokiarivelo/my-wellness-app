import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../.generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Optionnel : log query/debug en dev
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
