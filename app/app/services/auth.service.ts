import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(model:any) {

        let body= JSON.stringify(model); 

        
        return this.http.post('https://destiny.mod.bz/adminlogincheck', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                let user = response.json();
                console.log('res',user)
                if (user && user.token) {
                 
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}