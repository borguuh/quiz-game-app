import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionInput } from './create-question.input';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question) private questionRepository: Repository<Question>, 
      ) {}

    async createQuestion(createQuestionInput: CreateQuestionInput): Promise<Question> {
        const { text, options, correctAnswer } = createQuestionInput;
    
        const question = this.questionRepository.create({
          id: uuid(),
          text,
          options: createQuestionInput.options.map(option => option?.text),
          correctAnswer
        });
    
        return this.questionRepository.save(question as Question);
    }
}
