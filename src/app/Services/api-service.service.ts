import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Endpoints } from '../Endpoint';
import { ErrorHandlingService } from './error-handling.service';
import { catchError } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly apiUrl = environment.apiUrl;
  private readonly apiproxyUrl = '/api/'                     // We will use proxy to connect to the api due to it was blocked by the cors. Check on how to create proxy configuration in angular for more information.

  constructor(private httpClient: HttpClient,private errorhandlingService:ErrorHandlingService) { }

  getFoodCategory() {
    return this.httpClient.get(this.apiproxyUrl + Endpoints.GetAllFoodCategory)
    .pipe(
      catchError(this.errorhandlingService.handleError())
    )
  }

  getFoodItemByCat(id:string) {
    let params = new HttpParams();

    params = params.append('categoryId',id)

    const options = {
      params:params,
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.httpClient.get(this.apiproxyUrl + Endpoints.GetFoodItemByCategory , options)
    .pipe(
      catchError(this.errorhandlingService.handleError())
    )
  }


}
