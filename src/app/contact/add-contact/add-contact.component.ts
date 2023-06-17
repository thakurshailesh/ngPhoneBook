import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  saveChanges(contactToBeAdded: Contact) {
    this.contactService.addContact(contactToBeAdded).subscribe(() => {
      this.router.navigate(['/contacts'])
    })
  }
  ngOnInit(): void {
  }

}
