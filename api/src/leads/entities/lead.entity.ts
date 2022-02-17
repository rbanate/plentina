import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  mobileNumber: string;

  @Column({ nullable: true })
  officeNumber?: string;

  @Column({ nullable: true })
  companyName?: string;
}
