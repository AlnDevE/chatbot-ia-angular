import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatiaFatecRoutingModule } from './chatia-fatec-routing.module';
import { ChatiaFatecComponent } from './chatia-fatec.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatiaFatecComponent
  ],
  imports: [
    CommonModule,
    ChatiaFatecRoutingModule,
    FormsModule
  ]
})
export class ChatiaFatecModule { }
