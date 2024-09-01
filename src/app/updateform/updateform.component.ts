import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequiredRoutes } from '../services/routes.services';
import { response } from 'express';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-updateform',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css',
  providers:[RequiredRoutes]
})
export class UpdateformComponent {
  constructor(private activeroute:ActivatedRoute,private servroute:RequiredRoutes,private formbuilder:FormBuilder,private route:Router){}

  userid:String=''
  form=this.formbuilder.group({
    name:'',
    email:'',
    contact_number:'',
    laptop_model:'',
    laptop_issue:''

  })
  tempv:any

  

  ngOnInit(){
    const userid=this.activeroute.snapshot.params['id']
    this.servroute.getuserbyid(userid).subscribe((response)=>{
      console.log(response)
      
      this.tempv=response
      this.form.patchValue(this.tempv.user)
      // console.log(this.tempv.user.name)
      //  form=this.formbuilder.group({
      //   name:this.formbuilder.control(""),
      //   email:this.formbuilder.control(""),
      //   contact_number:this.formbuilder.control(""),
      //   laptop_model:this.formbuilder.control(""),
      //   laptop_issue:this.formbuilder.control("")
      // })
      // const formdata={
      //   name:this.tempv.user.name,
      //   email:this.tempv.user.email,
      //   contact_number:this.tempv.user.contact_number,
      //   laptop_model:this.tempv.user.laptop_model,
      //   laptop_issue:this.tempv.user.laptop_issue



      // }
      
      // this.createeditform(formdata)
    })
    



  
  }

  updateserviceuser(){
    const id=this.activeroute.snapshot.params['id']
    this.servroute.editservice(id,this.form.value).subscribe((response)=>{
      alert("updated successfully")
      this.route.navigateByUrl('/services')
    })

  }

  // createeditform(data:Object){
  //   this.form=this.formbuilder.group(data)
  // }

  // save(){
  //   console.log(this.form.value)
  // }

}
