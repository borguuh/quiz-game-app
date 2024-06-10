import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsUUID } from "class-validator"

@InputType()
export class CreateQuizInput {
  @MinLength(1)
  @Field()
  title: string;

  @MinLength(1)
  @Field()
  description: string;

  @IsUUID("4", { each: true })
  @Field(() => [ID], { defaultValue: [] })
  quizzes: string[];
}