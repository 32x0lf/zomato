import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.css'
})
export class RestaurantItemsComponent implements OnInit {
 
  catId!:string;
  foodData:any[]=[];
  constructor(private activated:ActivatedRoute,private apiService:ApiServiceService){
    this.activated.params.subscribe((res:any)=> {
      this.catId = res.id
    })
  }

  ngOnInit(): void {
    this.getfoodItem();
  }
  
  getfoodItem(){
    this.apiService.getFoodItemByCat(this.catId).subscribe({
      next: (res:any) => {
        //debugger;
        if(res.result == true){
          this.foodData = res.data;
        }
        
      }
    })
  }
}
