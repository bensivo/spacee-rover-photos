import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: string = "";
  photos: any = [];

  constructor(private http: HttpClient) { }

  onClickSubmit(e: any) {
    console.log(this.date);

    const [year, month, day] = this.date.split('-');
    this.http.get(`http://localhost:3000/v1/rover/photo/date/${year}/${month}/${day}`)
    .subscribe((res: any) => {
      console.log(res);
      this.photos = res.photos;
    })
  }
}
