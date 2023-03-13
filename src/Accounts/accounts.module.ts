import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ACCEntity } from "./accentity.entity"

@Module({
    imports: [TypeOrmModule.forFeature([ACCEntity])],
    controllers: [AccountsController],
    providers: [AccountsService],
})

export class AccountsModule {
}
