import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert
  } from "typeorm";

  import bcrypt from "bcrypt";	
  
  @Entity("usuario")
  export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    email: string;


    @Column()
    senha: string;

    @BeforeInsert()
  hashPassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }
  
  }