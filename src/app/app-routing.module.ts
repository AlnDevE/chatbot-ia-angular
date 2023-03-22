import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chatia-fatec'
  },
  {
    path: 'chatia-fatec',
    loadChildren: () => import('./chatia-fatec/chatia-fatec.module').then(m => m.ChatiaFatecModule)
  },
  {
    path: 'chatia-fatec-training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
