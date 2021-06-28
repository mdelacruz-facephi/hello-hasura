import { Module } from '@nestjs/common';

import { PaymentInfoResolver } from './payment-info.resolver';

@Module({
  providers: [PaymentInfoResolver],
})
export class PaymentsModule {}