import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  frmGrp: FormGroup;

  @Input() model!: Contact;

  //Create event emitter to pass contact form data from contact-form-component to add-contact componenet
  @Output() OnContactEvent: EventEmitter<Contact>;


  constructor(private formBuilder: FormBuilder) {
    // intialization of event emitter for sending data to parent component
    this.OnContactEvent = new EventEmitter<Contact>()
    this.frmGrp = this.formBuilder.group({
      // create this model similar to model we are going to patch for contact
      id: (new Date()).getTime(),
      name: '',
      contactNumber: ''
    })
  }


  saveChanges() {
    // Triggering the custom events. Pass frm values to emitter.
    console.log(this.frmGrp.value)
    this.OnContactEvent.emit(this.frmGrp.value)
  }

  ngOnInit(): void {
    //
    if (this.model !== undefined) {
      this.frmGrp.patchValue(this.model)
    }
  }

}
