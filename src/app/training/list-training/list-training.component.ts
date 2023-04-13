import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ChatiaService } from 'src/app/service/chatia.service';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.scss']
})
export class ListTrainingComponent implements OnInit {

  allTrainings: any[] = [];
  globalFilters: string[] = ['tag','patterns','responses']

  constructor(private chatiaService: ChatiaService) { }

  ngOnInit(): void {
    this.getTraining();
  }

  getTraining(){
    this.chatiaService.getTraining().pipe(
      first()
    ).subscribe({
      next: (allTrainings: any) => this.allTrainings = allTrainings
    })
  }

  onDelete(trainingId: number | string){
    console.log(trainingId);
  }
}
