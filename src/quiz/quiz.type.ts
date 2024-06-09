import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Quiz')
export class QuizType {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

}