import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("accounts")
export class ACCEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    position: string;

    @Column()
    joining_date: string;

    @Column()
    address: string;

}