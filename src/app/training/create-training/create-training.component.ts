import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss']
})
export class CreateTrainingComponent implements OnInit {

  showInputQuestion: boolean = true;
  showInputResponse: boolean = true;
  listQuestions: any[] = [];
  listResponses: any[] = [];

  constructor() { }

  ngOnInit(): void {}

  addOnList($event: any, type: string){
    type == 'question' ? this.listQuestions.push($event?.target?.value) : this.listResponses.push($event?.target?.value)
  }
}
