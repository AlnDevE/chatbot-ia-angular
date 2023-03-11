import { Component, OnInit } from '@angular/core';
import { ChatiaService } from '../service/chatia.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-chatia-fatec',
  templateUrl: './chatia-fatec.component.html',
  styleUrls: ['./chatia-fatec.component.scss']
})
export class ChatiaFatecComponent implements OnInit {

  textInput!: string;

  constructor(
    private chatIaService: ChatiaService
  ) { }

  ngOnInit(): void {
  }

  sendQuestion(){
    if(this.textInput){
      this.chatIaService.sendQuestion(this.textInput).pipe(
        first()
      ).subscribe({
        next: (response: any) => console.log(),
        error: () => console.log('deu ruim')
      })
    }
  }
}
