import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    id:1001,
    name:"chawanwit",
    address:"Thailnd",
  }
  i:number = 0;
  nameInput:string=" ";

  sayHi(){
    return "Hi From " + this.user.name;
  }

  addCount(){
    this.i++;
  }

  disCount(){
    this.i--;
  }

  readName(name:string){
      console.log(name);
      this.nameInput = name;
  }

  valid: boolean = 1>2;
  validAge: boolean = false;

  readAge(age:string){
    let a = parseInt(age)
    this.validAge = a>=18 && a<=25;
  }

  menus = ["Shabu","KFC","MK","BBQ","Salad"];
  courses = [
    {id: 1, title:"Typescript"},
    {id: 2, title:"Java"},
    {id: 3, title:"php"},
    {id: 4, title:"Angular"},
    {id: 5, title:"Flutter"},
  ]
}


