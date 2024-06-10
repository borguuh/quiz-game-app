import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class OptionsType {
  @Field()
  text: string;
}

@InputType()
export class CreateQuestionInput {
  @MinLength(1)
  @Field()
  text: string;

  @Field(() => [OptionsType]) // Array of OptionType
  options: OptionsType[];

  @MinLength(1)
  @Field()
  correctAnswer: string;
}