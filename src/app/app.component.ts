import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb : FormBuilder)
  {

  }

  registrationForm = this.fb.group({
    username : [''],
    email : [''],
    password : ['']
  })


  onSubmit()
  {
    console.log(343)
      console.log(this.registrationForm.value)
  }
}
