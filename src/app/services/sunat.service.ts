import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SunatService {
  API: string = 'https://sunat-laravel-api.herokuapp.com/api/cliente';
  private clientes: any;

  constructor(private clientHttp: HttpClient) {}

  obtenerClientePorDocumento(documento: string): Observable<any> {
    return this.clientHttp.get(this.API + '/' + documento);
  }
}
