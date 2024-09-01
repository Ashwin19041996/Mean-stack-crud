import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredRoutes } from '../services/routes.services';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,HttpClientModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[RequiredRoutes]
})
export class HomeComponent {
  constructor(private serviceroutes:RequiredRoutes, private route:ActivatedRoute){}
  userid:string=''
  ngOnInit(){
    this.userid=this.route.snapshot.params["id"]
    
  }

   testfunction(){
    this.serviceroutes.testfunction()
   }
  sendformdata(data:any){
    this.serviceroutes.postservice(data)
    console.log(data)

  }

  getallservices(){
    this.serviceroutes.getservices().subscribe((response)=>{
      console.log(response)
    })
    
  }

  updateservice(id:string,data:object){
    console.log(id,data)

  }
}
