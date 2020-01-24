import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private FirstNumber:number=null;
  private SecondNumber:number=null;
  private result:number=null;
  
 
public getAdd(): void{
  this.result=this.FirstNumber+ this.SecondNumber;
  
}
public getSub():void{
  this.result=this.FirstNumber-this.SecondNumber;
 
}
public getMul(): void{
  this.result=this.FirstNumber*this.SecondNumber;
 
}
public getDiv(): void{
  this.result=this.FirstNumber/this.SecondNumber;

}


  
    
  
}
