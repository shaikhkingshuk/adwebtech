import { IsEmail, IsNotEmpty, IsInt, Length, IsString, MinLength, MaxLength} from 'class-validator';
export class CreateAccDto {
    /*@Length(10, 12, {message:"Length of 'ID' should between 10 and 12.."})
    @IsNotEmpty({message:"'ID' can not be empty.."})
    id: number;

    @MinLength(4,{ message: "'Name' size must be greater than 3.." })
    @MaxLength(30, {message: "'Name' size must be lower 31.."})
    @IsString({message:"'Name' must be written in string format.."})
    @IsNotEmpty({ message: "'Name' can not be submitted as empty.." })
    name: string;

    @IsInt({message:"'Salary' must be written in integer format.."})
    @IsNotEmpty({message:"'Salary' can not be submitted as empty.."})
    salary: number;
    @IsEmail()
    @IsNotEmpty({ message: "'Email' can not be submitted as empty.." })
    email: string;*/
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    position: string;

    @IsNotEmpty()
    joining_date: string;

    @IsNotEmpty()
    address: string;
}
export class UpdateAccDto {
    @Length(10, 12, { message: "Length of 'ID' should between 10 and 12.." })
    @IsNotEmpty({ message: "'ID' can not be empty.." })
    id: number
    @IsInt({ message: "'Salary' must be written in integer format.." })
    @IsNotEmpty({ message: "'Salary' can not be submitted as empty.." })
    salary: number
}