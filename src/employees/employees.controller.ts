import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import * as employeeDto from './employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {
  }

  @Post()
  create(@Body() employee: employeeDto.EmployeeDto) {
    return this.employeesService.create(employee);
  }

  @Get()
  getAll() {
    return this.employeesService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.getById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() employee: employeeDto.EmployeeDto
  ) {
    return this.employeesService.update(id, employee);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.delete(id);
  }
}