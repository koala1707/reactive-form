import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    fn: ['', Validators.required],
    ln: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder){ }

  // profileForm = new FormGroup({
  //   fn: new FormControl(''),
  //   ln: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   })
  // });

  // constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      fn: 'Mike',
      address: {
        street: '123 Demo Street'
      }
    });
  }

  //Getter to get the aliases instance
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  //Add an aliase control into aliases form array
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
