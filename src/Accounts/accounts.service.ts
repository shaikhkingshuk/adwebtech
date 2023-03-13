import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ACCEntity } from "./accentity.entity";
import { CreateAccDto } from "./accounts.dto";
import { AccDataUpdate } from "./accupdate.dto";

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(ACCEntity)
        private accRepo: Repository<ACCEntity>,
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


}