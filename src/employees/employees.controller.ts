import { Controller, Post, Body, Get, Param  } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { create } from 'domain';

@Controller('employees')
export class EmployeesController {
  
  constructor(private readonly employeesService: EmployeesService) { }

 
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }
  
    @Get()
    findAll() {
      return this.employeesService.findAll();
}
@Get(':id')
findOne(@Param('id') id: string){
  return this.employeesService.findOne(+id)
}
}