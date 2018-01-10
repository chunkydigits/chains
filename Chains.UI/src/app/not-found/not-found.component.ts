import { Component } from '@angular/core';

@Component({
    template: `
        <div class="jumbotron text-center">
            <h1>Oops - Page not found</h1>
            <p>That is not the page you are looking for ... <a routerLink="/">back</a></p>
        </div>
    `
})

export class NotFoundComponent { }