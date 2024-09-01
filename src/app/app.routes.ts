import { Routes } from '@angular/router';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { HomeComponent } from './home/home.component';
import { UpdateformComponent } from './updateform/updateform.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"services",component:ServiceComponentComponent},
    {path:'home/:id',component:HomeComponent},
    {path:'updateform/:id',component:UpdateformComponent}
];
