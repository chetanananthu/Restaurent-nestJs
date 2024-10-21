import{
    IsNotEmpty,
    IsString,
}from 'class-validator';

export class CreateRestaurentDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    location:string;

    @IsNotEmpty()
    rating:number;  

}
