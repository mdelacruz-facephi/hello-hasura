import { Args, Query, Resolver } from "@nestjs/graphql";
import { PaymentInfo } from "./payment-info.model";

@Resolver(of => PaymentInfo)
export class PaymentInfoResolver {
  @Query(returns => PaymentInfo)
  async paymentInfo(@Args('userId', { type: () => String }) userId: string) {
    console.log(`Payment info resolved for ${userId} user.`);
    return new PaymentInfo(
      "c480f273-e61d-44b4-98c5-7f16c8cc627d",
      userId,
      `Payment info of ${userId}`
    );
  }
}