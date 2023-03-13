import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ACCEntity } from "./accentity.entity";
import { OrderEntity } from "./orderentity.entity";
import { CreateAccDto,CreateOrdDto,ItemsPricesDto,BillsDto,TransactionsDto } from "./accounts.dto";
import { AccDataUpdate } from "./accupdate.dto";
import { TransactionEntity } from "./transactionentity.entity";
import { BillsEntity } from "./billentity.entity";
import { ItemPriceEntity } from "./itempriceentity.entity";


@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(ACCEntity)
        private accRepo: Repository<ACCEntity>,
        @InjectRepository(OrderEntity)
        private ordRepo: Repository<OrderEntity>,
        @InjectRepository(TransactionEntity)
        private transactionRepo: Repository<TransactionEntity>,
        @InjectRepository(BillsEntity)
        private billsRepo: Repository<BillsEntity>,
        @InjectRepository(ItemPriceEntity)
        private itemsRepo: Repository<ItemPriceEntity>
    ) { }



    createACC(createacc: CreateAccDto): any {
        const newaccount = new ACCEntity()
        newaccount.name = createacc.name;
        newaccount.email = createacc.email;
        newaccount.position = createacc.position;
        newaccount.joining_date = createacc.joining_date;
        newaccount.address = createacc.address;
        return this.accRepo.save(newaccount);
    }

    getAllAccounts(): any {
        return this.accRepo.find();
    }


    updateAccbyid(updatedto: AccDataUpdate, id): any {
        return this.accRepo.update(id, updatedto);
    }


    deleteAccbyid(id): any {
        return this.accRepo.delete(id);
    }




    createOrd(createOrd: CreateOrdDto): any {
        const neword = new OrderEntity()
        neword.name = createOrd.name;
        return this.ordRepo.save(neword);
    }

    getAllOrds(): any {
        return this.ordRepo.find();
    }

    /*createItemsPrice(createItems: ItemsPricesDto): any {
        const newitems = new ItemPriceEntity()
        newitems.items_id = createItems.items_id;
        newitems.items_quantity = createItems.items_quantity;
        newitems.items_price = createItems.items_price;
        return this.itemsRepo.save(newitems);
    }*/
    createItemsPrice(createItems: ItemsPricesDto): any {
        return this.itemsRepo.save(createItems);
    }




    createBills(createBills: BillsDto): any {
        const newbills = new BillsEntity()
        newbills.total_price_of_items = createBills.total_price_of_items;
        newbills.total_price_including_tax = createBills.total_price_including_tax;
        return this.billsRepo.save(newbills);
    }
    createTransactions(createTransactions: TransactionsDto): any {
        const newtransaction = new TransactionEntity()
        newtransaction.transaction_method = createTransactions.transaction_method;
        newtransaction.transaction_date = createTransactions.transaction_date;
        newtransaction.transaction_status = createTransactions.transaction_status;
        return this.transactionRepo.save(newtransaction);
    }
}