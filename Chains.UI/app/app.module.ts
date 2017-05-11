import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from './app.routing'
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeMessageComponent } from './home/welcome-message.component';
import { InfoTileComponent } from './shared/components/info-tile.component';
import { InfoTileService } from './shared/services/info-tile.service';
import { HowToComponent } from './home/how-to.component';
import { ChainModule } from './shared/modules/chain.module';
import { PropertyModule } from './shared/modules/property.module';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        appRouting, 
        ChainModule, 
        PropertyModule, 
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent, 
        ContactComponent, 
        NotFoundComponent, 
        WelcomeMessageComponent, 
        InfoTileComponent, 
        HowToComponent
    ],
    providers: [
        InfoTileService, 
        AuthGuard, 
        CanDeactivateGuard
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }