import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Training } from '../interface/training';

@Injectable({
  providedIn: 'root'
})
export class ChatiaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendQuestion(textInput: string){
    let params = new HttpParams().append('message', textInput);
    return this.httpClient.get(`${environment.apiUrl}response/`, {params: params});
  }

  postTraining(training: Training){
    training.context = []
    return this.httpClient.post(`${environment.apiUrl}train/`, training);
  }

  deleteTrainig(trainingId: number | string){
    return this.httpClient.delete(`${environment.apiUrl}trainings/${trainingId}`);
  }

  putTrainig(training: Training){
    return this.httpClient.put(`${environment.apiUrl}trainings/${training.id}`, training);
  }

  getTraining(){
    return this.httpClient.get(`${environment.apiUrl}trainings/`);
  }
}
