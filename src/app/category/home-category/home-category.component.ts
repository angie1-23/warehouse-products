import { Component , OnInit} from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private fb:FormBuilder){
    
  }

  ngOnInit():void{
    this.formLogin=this.fb.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required,Validators.minLength(6)]],
      'terms':['',[Validators.required],],
    })
  }

  send():any{
    console.log(this.formLogin.value)
  }
}

  // favoriteColorControl = new FormControl('');


