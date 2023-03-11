import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatia-fatec',
  templateUrl: './chatia-fatec.component.html',
  styleUrls: ['./chatia-fatec.component.scss']
})
export class ChatiaFatecComponent implements OnInit {

  textInput!: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendQuestion(){
    console.log(this.textInput);
  }
}
