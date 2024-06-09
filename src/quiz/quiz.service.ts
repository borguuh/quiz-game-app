import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
      ) {}


    async createLesson(title, description): Promise<Quiz> {

        const quiz = this.quizRepository.create({
          id: uuid(),
          title,
          description
        });
    
        return this.quizRepository.save(quiz);
      }
    
}
