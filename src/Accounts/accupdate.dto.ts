import { IsNotEmpty, IsInt, Length,MinLength,MaxLength } from "class-validator";

export class AccDataUpdate {

    @IsNotEmpty()
    name: string;

}

export class OrdUpdate {

    @IsNotEmpty()
    @MinLength(4,{ message: "'Name' size must be greater than 3.." })
    @MaxLength(30, {message: "'Name' size must be lower 30.."})
    name: string;

}

export class ItemsUpdate {

    @IsNotEmpty()
    items_id: string;

}

export class billsUpdate {

    @IsNotEmpty()
    @IsInt()
    total_price_of_items: number;
    
    @IsNotEmpty()
    @IsInt()
    total_price_including_tax: number;

}

export class transUpdate {

    @IsNotEmpty()
    transaction_method: string;

    @IsNotEmpty()
    transaction_date: string;

    @IsNotEmpty()
    transaction_status: string;

}