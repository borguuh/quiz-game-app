import { Query, Resolver } from "@nestjs/graphql";
import { QuizType } from "./quiz.type";

@Resolver(of => QuizType)
export class QuizResolver {
    @Query(returns => QuizType)
    quiz(){
        return {
            id: "1f3",
            title: "First Quiz",
            description: "The first one"
        }
    }   
}