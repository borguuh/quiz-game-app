import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OptionType {
  @Field()
  text: string;
}

@ObjectType('Question')
export class QuestionType {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field(() => [OptionType]) // Array of OptionType
  options: OptionType[];

  @Field()
  correctAnswer: string;
}