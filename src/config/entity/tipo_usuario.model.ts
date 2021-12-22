import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tipo_usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descripcion: string;
}
