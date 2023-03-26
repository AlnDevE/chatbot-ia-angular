import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ListTrainingComponent } from './list-training/list-training.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { InfoTrainingComponent } from './info-training/info-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrainingComponent,
    ListTrainingComponent,
    CreateTrainingComponent,
    InfoTrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrainingModule { }
