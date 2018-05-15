import { Component } from '@angular/core';
import { HttpServiceService} from './http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleArray =[];
  constructor(public service:HttpServiceService){
      this.service.getData().subscribe((res)=>{
        this.titleArray = res;
      },(err)=>{
        console.log(err);
      });
  }
}
