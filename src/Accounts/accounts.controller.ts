import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateAccDto,CreateOrdDto,ItemsPricesDto,BillsDto,TransactionsDto } from "./accounts.dto";
import { AccountsService } from "./accounts.service";
import { AccDataUpdate } from "./accupdate.dto";

@Controller("/accounts")
export class AccountsController {
    constructor(private accountsService: AccountsService) { }



    @Post("/createacc")
    @UsePipes(new ValidationPipe())
    createAcc(@Body() createacc: CreateAccDto): any {
        return this.accountsService.createACC(createacc);
    }



    @Get('/index')
    getAdmin(): any {
        return this.accountsService.getAllAccounts();
    }



    @Put('/updateacc/:id')
    @UsePipes(new ValidationPipe())
    updateAccbyid(
        @Body() mydto: AccDataUpdate,
        @Param('id', ParseIntPipe) id: number,
    ): any {
        return this.accountsService.updateAccbyid(mydto, id);
    }


    @Delete('/deleteacc/:id')
    @UsePipes(new ValidationPipe())
    deleteAccbyid(@Param('id', ParseIntPipe) id: number): any {
        return this.accountsService.deleteAccbyid(id);

    }
    @Post("/createord")
    @UsePipes(new ValidationPipe())
    createOrd(@Body() createord: CreateOrdDto): any {
        return this.accountsService.createOrd(createord);
    }
    @Get('/findord')
    getOrd(): any {
        return this.accountsService.getAllOrds();
    }


    @Post("/createorditemprice")
    @UsePipes(new ValidationPipe())
    createItemsPrice(@Body() ipdto: ItemsPricesDto): any {
        return this.accountsService.createItemsPrice(ipdto);
    }


    @Post("/create")
    @UsePipes(new ValidationPipe())
    createBills(@Body() bdto: BillsDto): any {
        return this.accountsService.createBills(bdto);
    }


    @Post("/createord")
    @UsePipes(new ValidationPipe())
    createTransactions(@Body() trandto: TransactionsDto): any {
        return this.accountsService.createTransactions(trandto);
    }


}