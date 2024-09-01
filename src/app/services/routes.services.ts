
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { response } from "express";
import { json } from "stream/consumers";
@Injectable({
    providedIn:'root'
})
export class RequiredRoutes{
    
    constructor(private http:HttpClient ){

    }
    formdata:Array<object>=[]
    apiurl="http://localhost:8000"
    

    testfunction(){
        alert("its working")
    }

   


    postservice(data:any){
        console.log(data)
        this.http.post(this.apiurl+'/api/postformdata',data)
        .subscribe((response)=>{
            console.log(response)

        })
        alert("we got your problem .please visit services to know the appointment date")
        
    }

    getservices(){
       return this.http.get(this.apiurl+'/api/getservices')

    }

    getuserbyid(id:String){
        return this.http.get(this.apiurl+`/api/${id}`)

    }

    editservice(id:string,body:object){
        return this.http.put(this.apiurl+`/api/${id}/edit`,body)
    }

    deleteservice(id:String){
        return this.http.delete(this.apiurl+`/api/${id}/delete`)
    }

    


 
}