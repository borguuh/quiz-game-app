import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/quiz.entity';
import { QuestionModule } from './question/question.module';
import { Question } from './question/question.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/quiz',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Quiz,
        Question
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    QuizModule,
    QuestionModule,
  ],

})
export class AppModule {}
