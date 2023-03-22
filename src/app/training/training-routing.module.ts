import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { ListTrainingComponent } from './list-training/list-training.component';
import { InfoTrainingComponent } from './info-training/info-training.component';

const routes: Routes = [
  {
  path: '',
  component: TrainingComponent,
  children: [
    {
      path: 'create',
      component: CreateTrainingComponent
    },
    {
      path: 'list',
      component: ListTrainingComponent
    },
    {
      path: 'info',
      component: InfoTrainingComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'info'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
