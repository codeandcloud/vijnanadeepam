import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../interfaces/menu-item';

@Injectable({
  providedIn: 'root',
})
export class SiteMenu {
  private http = inject(HttpClient);
  private getMenuUrl = '/config/menu.json';

  getItems = (): Observable<MenuItem[]> => {
    return this.http.get<MenuItem[]>(this.getMenuUrl);
  };
}
