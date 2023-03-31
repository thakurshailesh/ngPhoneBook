import { environment } from "src/environments/environment";
import {HttpClient} from '@angular/common/http'
import {Contact} from './contact.model'
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ContactService{
    private contactApiUrl = environment.contactApiUrl;
    constructor(private httpClient: HttpClient){
        console.log(this.contactApiUrl)
    }

    getAllContacts(): Observable <Contact[]>{
        return this.httpClient.get <Contact[]>(this.contactApiUrl);
    }

}