import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatiaFatecComponent } from './chatia-fatec.component';

const routes: Routes = [
  {
    path: '',
    component: ChatiaFatecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatiaFatecRoutingModule { }
