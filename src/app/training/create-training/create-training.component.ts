import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ChatiaService } from 'src/app/service/chatia.service';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss']
})
export class CreateTrainingComponent implements OnInit {

  @ViewChild('qInpt') questionsInput!: ElementRef;
  @ViewChild('rInpt') responsesInput!: ElementRef;

  showInputQuestion: boolean = true;
  showInputResponse: boolean = true;
  form!: FormGroup;
  listQuestions: any[] = [];
  listResponses: any[] = [];

  constructor(
    private trainService: ChatiaService,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        tag: ['', Validators.required],
        patterns: [[], Validators.required],
        responses: [[], Validators.required]
      })
    }

  ngOnInit(): void {}

  addOnList($event: any, type: string){
    if($event?.target?.value){
      type == 'question' ? this.listQuestions.push($event?.target?.value) : this.listResponses.push($event?.target?.value)
    }
    this.form.get('patterns')?.setValue(this.listQuestions);
    this.form.get('responses')?.setValue(this.listResponses);
  }

  onSend(){
    if(this.form.valid){
      this.trainService.postTraining(this.form.value).pipe(
        first()
      ).subscribe({
        next: () => {
          console.log('deu bom');
          this.form.reset();
        }
      })
    }
  }

  get patterns(){
    return this.form.controls['patterns'] as FormArray;
  }

  get responses(){
    return this.form.controls['responses'] as FormArray;
  }

  clearInputs(){
    this.questionsInput.nativeElement.value = '';
    this.responsesInput.nativeElement.value = '';
  }
}
