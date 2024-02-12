import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
RegisterClick(data:any) {
  console.log(data)
  alert(JSON.stringify(data));
}
  
}

