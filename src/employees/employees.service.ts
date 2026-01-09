import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-eployee.dto'; 
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

  findOne(id: number) {
    const employee = this.employees.find(emp => emp.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = this.findOne(id);  
    const index = this.employees.findIndex(emp => emp.id === id);
    
    this.employees[index] = {
      ...employee,
      ...updateEmployeeDto
    };

    return this.employees[index];
  }

  remove(id: number) {
    const employee = this.findOne(id);
    this.employees = this.employees.filter(emp => emp.id !== id);
    return { deleted: true, ...employee };
  }
}