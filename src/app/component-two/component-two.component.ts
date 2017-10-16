import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor( private service: Service ) 
  { 

  }

  ngOnInit() 
  {
  }

  public jumpPage1( page: string ): void
  {
    this.service.jumpToPage(page);
  }

}
