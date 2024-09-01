import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredRoutes } from './services/routes.services';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RequiredRoutes]
})
export class AppComponent {
  title = 'laptop-service-app-using-angular';
  constructor(private serviceroutes:RequiredRoutes){

  }

 
}
