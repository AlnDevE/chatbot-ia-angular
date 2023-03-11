import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChatiaService } from '../service/chatia.service';
import { first } from 'rxjs';
import { Message } from '../interface/message';

@Component({
  selector: 'app-chatia-fatec',
  templateUrl: './chatia-fatec.component.html',
  styleUrls: ['./chatia-fatec.component.scss']
})

export class ChatiaFatecComponent implements OnInit {

  @ViewChild('content') content!: ElementRef;

  textInput!: string;
  afterInit: boolean = false;
  listMessages: Message[] = []

  constructor(
    private chatIaService: ChatiaService
  ) { }

  ngOnInit(): void {
  }

  sendQuestion(){
    this.afterInit = true;
    if(this.textInput){
      this.listMessages.push({message: this.textInput, type: 'send'});
      this.chatIaService.sendQuestion(this.textInput).pipe(
        first()
      ).subscribe({
        next: (response: any) => {
          this.listMessages.push({message: response, type: 'receive'});

        },
        error: () => console.log('deu ruim')
      })
    }
  }

  scrollToBottom(){
    try{
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    }catch(err){}
  }
}
