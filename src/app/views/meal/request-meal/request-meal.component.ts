import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';

import { MealService } from '../../services/meal/meal.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Employee } from '../../class/employee';
import { Meal } from '../../class/meal';

@Component({
  selector: 'app-request-meal',
  templateUrl: './request-meal.component.html',
  styleUrls: ['./request-meal.component.scss'],
})
export class RequestMealComponent implements OnInit {
  searchText = '';
  employee = new Employee();
  meal = new Meal();
  searchMeal: any;
  isSubmitting = false;
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private mealService: MealService,

    private router: Router
  ) {}

  ngOnInit(): void {}
  searchEmploy() {
    this.employeeService.getEmployee(this.searchText).subscribe({
      next: (res) => {
        if (res.ok) {
          this.employee = res.body!.data;
          console.log(this.employee);

          this.employee.departmentName =
            res.body!.data.departmentId.departmentName;
        } else {
        }
      },
      error: (err) => {
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }
  saveMeal() {
    this.mealService.createMeal(this.meal).subscribe(
      (data) => {
        console.log(data);

        Swal.fire('Success', 'Data saved successfully!', 'success');
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.isSubmitting = true;
    console.log(this.meal);
    this.saveMeal();



  }

}
