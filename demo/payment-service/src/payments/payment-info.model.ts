import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentInfo {
  constructor(
    id: string,
    userId: string,
    info: string,
  ) {
    this.id = id;
    this.userId = userId;
    this.info = info;
  }

  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  info: string;
}