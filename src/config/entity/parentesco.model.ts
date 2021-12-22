import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class parentesco {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descripcion: string;
}
