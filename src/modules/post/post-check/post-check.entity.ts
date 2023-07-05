import { CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

// We use this entity to check if posts for the user have already been fetched from external API
// We need this to avoid fetching new posts if user already deleted every post they have
// P.S. We could also not hard delete posts from DB (that way we would check if user has any posts in DB)
// but I decided to go with this approach, as we can also avoid calls to posts' table, which will contain
// considerable amount of data
@Entity('post-checks')
export class PostCheck {
  @PrimaryColumn()
  userId: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt!: Date;
}
