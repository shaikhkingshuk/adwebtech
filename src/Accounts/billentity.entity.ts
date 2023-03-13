import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("bills")
export class BillsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total_price_of_items: number;

    @Column()
    total_price_including_tax: number;
}