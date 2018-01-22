import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class EstateAgentHomeComponent implements OnInit {
  private baseUrl: string = 'estate-agent';

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToPropertyList(){
    this.router.navigate([this.baseUrl + '/property-list']);
  }
}
