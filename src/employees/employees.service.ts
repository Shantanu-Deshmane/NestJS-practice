import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/eployee.entity'; 

@Injectable()
export class EmployeesService {
  private employees: Employee[] = []; 

  create(createEmployeeDto: CreateEmployeeDto) {
    
    const newId = this.employees.length + 1;

    const newEmployee: Employee = {
      id: newId,
      ...createEmployeeDto, 
    };

    this.employees.push(newEmployee);
    
    return newEmployee;
  }

  findAll() {
    return this.employees;
  }

  findOne(id:number){
    return this.employees.find(employee => employee.id === id); 
  }
}