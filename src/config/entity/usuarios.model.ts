import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Tipo_usuario } from './tipo_usuario.model';
import { parentesco } from './parentesco.model';
import { type } from 'os';

@Entity()
export class usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  tipo_id: string;

  @Column({ type: 'int', length: 255 })
  documento: number;

  @Column({ type: 'varchar', length: 255 })
  nombres: string;

  @Column({ type: 'varchar', length: 255 })
  apellidos: string;

  @Column({ type: 'varchar', length: 50 })
  sexo: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'int', length: 30 })
  telefono: number;

  @Column({ type: 'varchar', length: 255 })
  imgUrl: string;

  @Column()
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 255 })
  departamento: string;

  @Column({ type: 'varchar', length: 255 })
  ciudad: string;

  @Column({ type: 'varchar', length: 255 })
  contrasena: string;

  @OneToOne((type) => Tipo_usuario, { eager: true, cascade: true })
  Tipo_usuario: Tipo_usuario;

  @OneToOne((type) => parentesco, { eager: true, cascade: true })
  parentesco: parentesco;

  @OneToOne((type) => usuarios, { eager: true, cascade: true })
  titular_id: usuarios;
}
