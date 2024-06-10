import { Entity, PrimaryColumn, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm';

// @Entity()
// export class Question {
//   @ObjectIdColumn()
//   _id: string;

//   @PrimaryColumn()
//   id: string;

//   @Column()
//   text: string;

//   @Column() 
//   options: Option[];

//   @Column()
//   correctAnswer: string;

// }

// @Entity()
// export class Option {
//   @Column()
//   text: string;
// }

@Entity()
export class Question {
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}

@Entity()
export class Option {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;

  @Column()
  correctAnswer: string;

}