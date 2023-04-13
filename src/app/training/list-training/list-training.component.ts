import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.scss']
})
export class ListTrainingComponent implements OnInit {

  allTrainings: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
