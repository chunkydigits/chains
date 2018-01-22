import { Component, OnInit } from '@angular/core';
import { expand } from 'rxjs/operators/expand';
import { FeedbackService } from '../shared/services/feedback.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  public expanded: boolean = false;
  public message: string = null;
  public error: boolean = false;
  public displayMessage: boolean = false;
  public feedback: any = {};

  constructor(private service: FeedbackService) { }

  ngOnInit() {
  }

  expand() {
    this.expanded = !this.expanded;
  }

  submitFeedback() {
    this.service.submitFeedback(this.feedback)
      .then(response => {
        if (!response.error) {
          debugger;
          this.feedback = {};
          this.showMessage(false, "Thanks! Your feedback will be looked at shortly");
        } else {
          this.showMessage(true, "Oops! Something went wrong. Please try again later.");
        }
      })
      .catch(response => this.showMessage(true, response));
  }

  cancelFeedback() {
    this.feedback = {};
    this.expanded = false;
  }

  showMessage(error: boolean, message: string) {
    this.error = error;
    this.message = message;
    this.displayMessage = true;
  }
}
