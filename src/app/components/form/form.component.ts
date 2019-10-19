import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// POST
// -
// https://test.secureprivacy.ai/api/email
// The parameters are
// {
// "To": "",
// "Subject": "",
// "Body": "",
// "Template": "",
// "TemplateTags": {},
// "AttachmentName": "",
// "File": "file",
// "AttachmentUrl": ""
// }
// Note
// –
// Use only To, Subject, Body fields for API call
// On success the API returns 204

