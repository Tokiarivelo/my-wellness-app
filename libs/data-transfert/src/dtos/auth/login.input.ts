import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  @IsString()
  email!: string;

  @Field()
  @IsString()
  password!: string;
}
