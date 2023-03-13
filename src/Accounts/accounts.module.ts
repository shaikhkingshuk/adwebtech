import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ACCEntity } from "./accentity.entity";
import { OrderEntity } from "./orderentity.entity";
import { TransactionEntity } from "./transactionentity.entity";
import { BillsEntity } from "./billentity.entity";
import { ItemPriceEntity } from "./itempriceentity.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ACCEntity,OrderEntity,TransactionEntity,BillsEntity,ItemPriceEntity])],
    controllers: [AccountsController],
    providers: [AccountsService],
})

export class AccountsModule {
}
