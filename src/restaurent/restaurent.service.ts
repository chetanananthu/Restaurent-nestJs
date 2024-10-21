import { Injectable } from '@nestjs/common';
import { CreateRestaurentDto } from './dto/create-restaurent.dto';
import { UpdateRestaurentDto } from './dto/update-restaurent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import{Restaurent} from './entities/restaurent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurentService {
  constructor(
    @InjectRepository(Restaurent)
    private readonly restaurentRepository: Repository<Restaurent>,
  ) {}
  
  async create(createRestaurentDto: CreateRestaurentDto,) :Promise<Restaurent>{
    const restaurentData= this.restaurentRepository.create(createRestaurentDto,);
    console.log(createRestaurentDto);
     return await this.restaurentRepository.save(restaurentData);
    }

  findAll() {
    return `This action returns all restaurent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurent`;
  }

  update(id: number, updateRestaurentDto: UpdateRestaurentDto) {
    return `This action updates a #${id} restaurent`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurent`;
  }
}
