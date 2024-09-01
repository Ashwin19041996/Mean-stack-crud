import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequiredRoutes } from '../services/routes.services';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css',
  providers:[RequiredRoutes]
})
export class ServiceComponentComponent {
constructor(private serviceroutes:RequiredRoutes ,private router:Router){}

allservices:Array<any>=[]
temp:any=[]

ngOnInit(){
  this.serviceroutes.getservices().subscribe((response)=>{
    
    this.temp=response
   
    const data=this.temp.serv1
    
    for(let i=0;i<data.length;i++){
      this.allservices.push(data[i])
    }
    console.log(this.allservices)
  })

 
}

// editservice(id:Number,data:JSON){
//   // this.serviceroutes.editservice(id,data).subscribe((response)=>{
//   //   alert(response)
//   // })
//   console.log(id)
//   console.log(data)

// }

deleteservice(id:String){
  
  
    
    this.serviceroutes.deleteservice(id).subscribe((response)=>{
      console.log(response)
      console.log(this.allservices)
    
      this.allservices=this.allservices.filter((u)=>u._id !=id)
      console.log(this.allservices)
      

      
    
    
    })
    
  }
 
}




