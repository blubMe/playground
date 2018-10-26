import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navTitle: string = "Capsule"
  myId: string = "capsuleID"
  isDisabled: boolean = true
  hasError: boolean = true
  display= ():boolean => this.isDisabled && this.hasError ? true : false
  messageText: object = {
    "text-success": !this.hasError,
    "text-error": this.hasError
  }
  constructor() { }

  ngOnInit() {
  }
  greeting():string{
    return "Im functions"
  }
  changeStat(event){
    this.hasError = !this.hasError
    console.log(this.hasError)
    console.log(event)
  }
}
