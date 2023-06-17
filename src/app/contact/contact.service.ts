import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http'
import { Contact } from './contact.model'
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private contactApiUrl = environment.contactApiUrl;
    constructor(private httpClient: HttpClient) {
        console.log(this.contactApiUrl)
    }

    getAllContacts(): Observable<Contact[]> {
        // service for getting observable of all contacts
        return this.httpClient.get<Contact[]>(this.contactApiUrl);
    }

    addContact(contactToBeAdded: Contact) {
        return this.httpClient.post(this.contactApiUrl, contactToBeAdded);
    }

    editContact(id: number, contactToBeEdited: Contact) {
        return this.httpClient.put(`${this.contactApiUrl}/${id}`, contactToBeEdited);
    }

    getContactById(id: number): Observable<Contact> {
        return this.httpClient.get<Contact>(`${this.contactApiUrl}/${id}`);
    }

    deleteContact(id: number) {
        return this.httpClient.delete(`${this.contactApiUrl}/${id}`);
    }



}