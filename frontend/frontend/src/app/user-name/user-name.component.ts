import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  displayName?: string;
};
@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss'],
})
export class UserNameComponent implements OnInit {
  profile: ProfileType | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.http.get(GRAPH_ENDPOINT).subscribe(
      (profile) => {
        this.profile = profile;
      },
      (err) => console.log(err)
    );
  }

  getWelcomeMessage(): string | undefined {
    return this.profile ? this.profile.displayName ?? '' : '';
  }
}
