import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  loadContacts() {
    this.contactService.getAllContacts().subscribe((contactList: Contact[]) => {
      this.contacts = contactList;
    });
  }
  ngOnInit(): void {
    this.loadContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(() => {
      alert('Record Deleted');
      this.loadContacts();
    }, (err) => {
      console.log(err);
    });
  }
}
