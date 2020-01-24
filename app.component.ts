import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private message:string=null;
 private version:number=null;
 private topics:string[]=null;
 private inx :number=null;
 public constructor(){
   this.message="welcome";
   this.version=8;
   this.topics=['Data Binding','Forms','Http','Routing'];
 
 }
 public addTopic(currentTopic:string):boolean{
   if(currentTopic==""){
     alert("Add topic");
     return false;
   }
   for(var topic of this.topics){
     if(currentTopic==topic)
     alert("Duplicate Value");
   }
   this.topics.push(currentTopic);
 }
 public delTopic(idx:number):void{
   this.topics.splice(idx,1);
 }
 public searchTopic(currentTopic:String):void{
 
     if(currentTopic==" "){
        alert("No Topics to display")
     }
   for(var topic of this.topics){
     

    if(currentTopic==topic){
      
    alert(currentTopic);
   }
  
  }

 }

  public deleteTopic(currentTopic:string):void{
    if(currentTopic==""){
    alert("no topics to delete");
    }
    for(var topic of this.topics){
      if(currentTopic==topic){
        this.inx=this.topics.indexOf(currentTopic);
        this.topics.splice(this.inx,1);
      }
    }
  
    
    
  }


   
 
}
