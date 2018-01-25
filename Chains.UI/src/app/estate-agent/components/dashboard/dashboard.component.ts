import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'estate-agent-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class EstateAgentDashboardComponent implements OnInit {
  private baseUrl: string = 'estate-agent';

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToPropertyList(){
    this.router.navigate([this.baseUrl + '/property-list']);
  }

  goToSettings(){
    alert('Go to settings');
  }

  goToManagement(){
    alert('Go to management');
  }
}
