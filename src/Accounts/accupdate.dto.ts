import { IsNotEmpty, IsInt, Length } from "class-validator";

export class AccDataUpdate {

    @IsNotEmpty()
    name: string;

}