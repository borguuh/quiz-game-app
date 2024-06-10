import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { QuizType } from "./quiz.type";
import { QuizService } from "./quiz.service";
import { CreateQuizInput } from "./quiz.input";

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

    @Query(returns => [QuizType])
    quizzes() {
      return this.quizService.getQuizzes();
    }

    @Mutation(returns => QuizType)
    createQuiz(
      @Args('createQuizInput') createQuizInput: CreateQuizInput, 
    ) {
      return this.quizService.createQuiz( createQuizInput);
    }
}