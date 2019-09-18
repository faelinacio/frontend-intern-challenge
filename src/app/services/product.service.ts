import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {ApiResponse} from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private resourceUrl = environment.SERVER_API_URL + '/products';

  constructor(private http: HttpClient) {
  }

  listProducts(page: number): Observable<HttpResponse<ApiResponse>> {
    let options: HttpParams = new HttpParams();
    options = options.set('page', page.toString());
    return this.http.get<ApiResponse>(this.resourceUrl, {params: options, observe: 'response'});
  }
}
