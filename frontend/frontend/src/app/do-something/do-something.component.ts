import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-do-something',
  templateUrl: './do-something.component.html',
  styleUrls: ['./do-something.component.scss'],
})
export class DoSomethingComponent implements OnInit {
  private whatToDo = 'do-nothing';
  backendResponse = '';

  constructor(private router: Router, private http: HttpClient) {
    this.whatToDo = this.router?.getCurrentNavigation()?.extras?.state?.what;
  }

  ngOnInit(): void {
    if (this.whatToDo) {
      this.http
        .get<string>(environment.apiBaseUrl + this.whatToDo, {
          responseType: 'text' as 'json',
        })
        .subscribe(
          (data) => (this.backendResponse = data),
          (error) => (this.backendResponse = (error as HttpErrorResponse).error)
        );
    }
  }
}
