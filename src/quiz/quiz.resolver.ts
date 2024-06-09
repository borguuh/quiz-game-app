import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { QuizType } from "./quiz.type";
import { QuizService } from "./quiz.service";

@Resolver(of => QuizType)
export class QuizResolver {
    constructor(
        private quizService: QuizService,
      ) {}


    @Query(returns => QuizType)
    quiz(
        @Args("id") id: string,
    ){
        return this.quizService.getQuiz(id)       
    }   

    @Mutation(returns => QuizType)
    createQuiz(
      @Args('title') title: string,
      @Args('description') description: string, 
    ) {
      return this.quizService.createQuiz( title, description);
    }
}