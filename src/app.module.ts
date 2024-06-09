import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/quiz.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/quiz',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Quiz
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    QuizModule,
  ],

})
export class AppModule {}
