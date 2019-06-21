import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService{
    public url:string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "http://127.0.0.1:8000/"
    }
    getActor(): Observable<any>{

        return this._http.get(this.url + "api/v1/moviesbyactor/"+"CCH Pounder"+"/");
    }
}
