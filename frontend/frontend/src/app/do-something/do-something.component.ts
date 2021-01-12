import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-do-something',
  templateUrl: './do-something.component.html',
  styleUrls: ['./do-something.component.scss'],
})
export class DoSomethingComponent implements OnInit {
  backendResponse = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const whatToDo = paramMap.get('what') ?? 'do-nothing';

      this.http
        .get<string>(environment.apiBaseUrl + whatToDo, {
          responseType: 'text' as 'json',
        })
        .subscribe(
          (data) => (this.backendResponse = data),
          (error) => (this.backendResponse = (error as HttpErrorResponse).error)
        );
    });
  }
}
