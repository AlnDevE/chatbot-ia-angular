import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatiaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendQuestion(textInput: string){
    let params = new HttpParams().append('message', textInput);
    return this.httpClient.get(environment.apiUrl, {params: params});
  }
}
