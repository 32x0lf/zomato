import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
 
  itemCategory: any[] = [];
  constructor(private apiService:ApiServiceService){}

  ngOnInit(): void {
    this.GetAllFoodCategory();
  }

  GetAllFoodCategory(){
    this.apiService.getFoodCategory().subscribe({
      next: (res:any) => {
        //debugger;
        this.itemCategory = res.data;
      }
    })
  }
}
