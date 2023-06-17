import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  model!: Contact;
  contactId!: number;

  constructor(private activateRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    // get form parameters using contact id through activatedRoute 
    // and save it in model parameter.
    this.activateRoute.params.subscribe((params) => {
      this.contactId = params['id'];
      this.contactService.getContactById(params['id']).subscribe((contactToEdit: Contact) => {
        this.model = contactToEdit;
        console.log("From edit-contact.ts", contactToEdit)
      });
    });
  }

  saveChanges(contactToBeEdited: Contact) {
    // 
    this.contactService.editContact(this.contactId, contactToBeEdited).subscribe(() => {
      //routes page to contacts page once
      this.router.navigate(['/contacts']);
    });


  }

}

