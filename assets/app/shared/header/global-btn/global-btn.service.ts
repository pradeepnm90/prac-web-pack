import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownMenuItem } from './store/model/global-btn.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalBtnService {
  API_URL = 'http://localhost:8000';
  constructor(private httpClient: HttpClient) { }

}
