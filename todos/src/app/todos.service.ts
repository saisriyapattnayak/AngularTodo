import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = "https://todos-app-e99c5-default-rtdb.firebaseio.com/"

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<any> {
    return this.httpClient.get<{[key: string]: any}>(`${this.baseUrl}/todos.json`).pipe(
      map(data => {
        let todos = [];
        console.log(data);
        for(let key in data) {
          todos.push({...data[key], key});
        }
        return todos;
      })
    );
  }

  createTodoItem(item: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/todos.json`, item);
  }

  updateTodoItem(item: any){
    console.log(item.key);
    return this.httpClient.put(`${this.baseUrl}/todos/${item.key}.json`, item);
  }

  deleteItem(itemKey: any) {
    return this.httpClient.delete(`${this.baseUrl}/todos/${itemKey}.json`);
  }
}
