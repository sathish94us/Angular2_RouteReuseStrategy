import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Service
{
    constructor( private router: Router )
    {

    }

    public jumpToPage( page: string ): void
    {
        this.router.navigateByUrl(page);
    }
}
