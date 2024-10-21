import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurentService } from './restaurent.service';
import { CreateRestaurentDto } from './dto/create-restaurent.dto';
import { UpdateRestaurentDto } from './dto/update-restaurent.dto';

@Controller('restaurent')
export class RestaurentController {
  constructor(private readonly restaurentService: RestaurentService) {}

  @Post()
  async create(@Body() createRestaurentDto: CreateRestaurentDto) {
    try{
     await this.restaurentService.create(createRestaurentDto);
     return{
      success:true,
      message:'Restaurent created successfully',
     };
     }
     catch(error){
      return{
        success:false,
        message:error.message,
      };
    }
  }

  @Get()
  findAll() {
    return this.restaurentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurentDto: UpdateRestaurentDto) {
    return this.restaurentService.update(+id, updateRestaurentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurentService.remove(+id);
  }
}
