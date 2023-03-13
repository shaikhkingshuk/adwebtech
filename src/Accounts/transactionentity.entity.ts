import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("transaction")
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    transaction_method: string;

    @Column()
    transaction_date: string;

    @Column()
    transaction_status: string;
}