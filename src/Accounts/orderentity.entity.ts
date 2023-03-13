import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemPriceEntity } from './itempriceentity.entity';

@Entity('orderlist')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ItemPriceEntity, itemprice => itemprice.orderlist)
    itemprice: ItemPriceEntity[]
}