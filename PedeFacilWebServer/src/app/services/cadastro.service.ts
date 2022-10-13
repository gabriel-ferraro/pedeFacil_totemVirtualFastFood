import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(protected http: HttpClient) { }

  listarStatus(): Observable<Status[]> {
    var url = "https://localhost:5001/api/Status";
    let response = this.http.get<Status[]>(url);
    // response.forEach(status => 
    //     console.log(status)
    // );
    return response;
  }

  buscarStatus(id: number): Observable<Status> {
    var url = "https://localhost:5001/api/Status/" + id;
    return this.http.get<Status>(url);
  }

  salvarStatus(status: Status): Observable<Status> {
    var url = "https://localhost:5001/api/Status";
    if (status.id > 0) {
      return this.http.put<Status>(url + "/" + status.id, status);
    } else {
      return this.http.post<Status>(url, status);
    }
  }

  excluirStatus(id: number): Observable<Status> {
    var url = "https://localhost:5001/api/Status/" + id;
    return this.http.delete<Status>(url);
  }
}
