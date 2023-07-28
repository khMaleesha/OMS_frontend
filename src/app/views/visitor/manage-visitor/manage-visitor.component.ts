import { Component, OnInit } from '@angular/core';

import { VisitorService } from '../../services/visitor/visitor.service';
import { Router } from '@angular/router';
import { Visitor } from '../../class/visitor';

@Component({
  selector: 'app-manage-visitor',
  templateUrl: './manage-visitor.component.html',
  styleUrls: ['./manage-visitor.component.scss'],
})
export class ManageVisitorComponent implements OnInit {
  visitor: Visitor = new Visitor();
  visitors: any;

  constructor(private visitorService: VisitorService, private router: Router) {
    this.visitors = [];
  }

  ngOnInit(): void {
    this.getAllVisitor();
  }

  private getAllVisitor() {
    this.visitorService.getVisitorList().subscribe((data) => {
      console.log(data);
      this.visitors = data;
    });
  }
  goToVisitorList() {
    this.router.navigate(['/getAllDesignation']);
  }

  visitorDetails(id: number) {
    this.router.navigate(['visitor-details', id]);
  }
  approvelvisitor(row: any): void {
    this.visitorService.approvalVisitor(row.visitorId).subscribe({
      next: (res) => {
        if (res.ok) {
          console.log(res.ok);
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
}
