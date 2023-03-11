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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
