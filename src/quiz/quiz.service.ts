import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateQuizInput } from './quiz.input';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
      ) {}

    async getQuiz(id: string): Promise<Quiz> {
        return this.quizRepository.findOne({ id });
    }

    async getQuizzes(): Promise<Quiz[]> {
        return this.quizRepository.find();
    }

    async createQuiz(createQuizInput: CreateQuizInput): Promise<Quiz> {
        const { title, description } = createQuizInput;

        const quiz = this.quizRepository.create({
          id: uuid(),
          title,
          description
        });
    
        return this.quizRepository.save(quiz);
    }
    
}
