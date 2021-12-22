import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class parentesco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  estado: string;
}
