import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Endpoints } from '../Endpoint';
import { ErrorHandlingService } from './error-handling.service';
import { catchError } from 'rxjs';

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

}
