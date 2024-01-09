import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit{
  usernameInputForm!: FormGroup;

  ngOnInit(): void {

    this.usernameInputForm = new FormGroup(
      {
        username: new FormControl('')
      }
    )
  }

  takeUsernameInput(){
    console.log(this.usernameInputForm.value)
  }



}
