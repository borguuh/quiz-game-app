import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizResolver } from './quiz.resolver';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Quiz]),
      ],
    providers: [
        QuizResolver,
        QuizService
       ]
})
export class QuizModule {}
