import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templater',
  templateUrl: './templater.component.html',
  styleUrls: ['./templater.component.css']
})
export class TemplaterComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
