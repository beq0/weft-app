import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt!: Date;
}
