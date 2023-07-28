import { Component, OnInit } from '@angular/core';

import { VisitorService } from '../../services/visitor/visitor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Visitor } from '../../class/visitor';




@Component({
  selector: 'app-visitor-appointment',
  templateUrl: './visitor-appointment.component.html',
  styleUrls: ['./visitor-appointment.component.scss']
})
export class VisitorAppointmentComponent implements OnInit {
  visitor = new Visitor();

  visitorName: string = '';

  isSubmitting = false;
    constructor(private visitorService:VisitorService,private router:Router){
    }
    ngOnInit(): void {
    }

    onSubmit() {
      this.isSubmitting = true;

      window.location.reload();
    }
    saveVisitor() {
      this.visitor.visitorId = this.visitor.visitorId;
      console.log(this.visitor);
      this.visitorService.createVisitor(this.visitor).subscribe(
        (data) => {
          Swal.fire('Success', 'Data saved successfully!', 'success');
          console.log(data);
        },
        (error) => console.log(error)
      );
    }

    validateInputs(form: any): void {
      if (form.valid) {
        // Form is valid, do something with the input values
        console.log('Visitor Name:', this.visitorName);
      } else {
        // Form is invalid, handle validation errors if needed
      }
    }
  
}
