import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { QuestionService } from './question.service';
import { CreateQuestionInput } from './create-question.input';

@Resolver(of => QuestionType)
export class QuestionResolver {
  constructor(
    private questionService: QuestionService,
  ) {}

//   @Query(returns => QuestionType)
//   async question(
//     @Args('id') id: string,
//   ) {
//     return this.questionService.getQuestion(id);
//   }

//   @Query(returns => [QuestionType])
//   async questions() {
//     return this.questionService.getQuestions();
//   }

  @Mutation(returns => QuestionType)
  async createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput
  ) {
    return this.questionService.createQuestion(createQuestionInput);
  }
}