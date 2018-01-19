import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  public expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.expanded = !this.expanded;
  }
}
