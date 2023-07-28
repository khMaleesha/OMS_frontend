import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { cilList, cilShieldAlt, cilUser } from '@coreui/icons';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
  icons = { cilList, cilShieldAlt ,cilUser};
  recordCount: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.fetchRecordCount();
  }

  // fetchRecordCount() {
  //   this.http.get<number>('http://localhost:7004/oms-api/api/v1/employee/count').subscribe(
  //     count => {
  //       console.log(count);

  //       this.recordCount = count;
  //     },
  //     error => {
  //       console.log('Error fetching record count:', error);
  //     }
  //   );
  // }

}

