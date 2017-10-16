import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  @ViewChild( 'page2' ) page2: ElementRef;
  constructor( private service: Service ) 
  { 

  }

  ngOnInit() 
  {
    document.addEventListener("scroll", () =>
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        {
          this.page2.nativeElement.style.position = "fixed";
        }
        else
          this.page2.nativeElement.style.position = "relative";
    });
  }

  public jumpPage2( page: string ): void
  {
    this.service.jumpToPage(page);
  }

}
