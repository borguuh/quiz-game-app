import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QuizModule } from './quiz/quiz.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    QuizModule,
  ],

})
export class AppModule {}
