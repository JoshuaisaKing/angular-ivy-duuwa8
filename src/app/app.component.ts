import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public userInfo: any;
  public constructor(private http: HttpClient) {}
  public ngOnInit() {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response: any) => {
      this.userInfo = response;
      console.log(this.userInfo);
    });
  }
}
