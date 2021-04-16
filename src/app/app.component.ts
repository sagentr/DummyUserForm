import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dummyForm: FormGroup;

  
  ngOnInit() {
    // This is the javascript object that comprises the form
        this.dummyForm = new FormGroup({
          'name': new FormControl(null),  
          'location': new FormControl(null, Validators.required),
          'age': new FormControl(null, Validators.required),
          'bio': new FormControl(null, Validators.required),
          'test': new FormControl(null, Validators.required),
        });
  }

  onSubmit() {
   console.log(this.dummyForm)
  }




}

