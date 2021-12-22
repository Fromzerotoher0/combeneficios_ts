import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Tipo_usuario } from './tipo_usuario.model';
import { parentesco } from './parentesco.model';
import { type } from 'os';

@Entity()
export class usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo_id: string;

  @Column()
  documento: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @Column()
  telefono: number;

  @Column()
  imgUrl: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  departamento: string;

  @Column()
  ciudad: string;

  @Column()
  contrasena: string;

  @OneToOne((type) => Tipo_usuario, { eager: true, cascade: true })
  Tipo_usuario: Tipo_usuario;

  @OneToOne((type) => parentesco, { eager: true, cascade: true })
  parentesco: parentesco;

  @OneToOne((type) => usuarios, { eager: true, cascade: true })
  titular_id: usuarios;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  estado: string;
}
