import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  roles: any = ['Admin', 'Author', 'Reader'];
  selected = 'Admin';
  ngOnInit(): void {}

}
