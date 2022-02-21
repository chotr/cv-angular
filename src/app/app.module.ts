import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './clients/navbar/navbar.component';
import { CarouselComponent } from './clients/carousel/carousel.component';
import { AboutComponent } from './clients/about/about.component';
import { SocialsComponent } from './clients/socials/socials.component';
import { SkillsComponent } from './clients/skills/skills.component';
import { BackToTopComponent } from './clients/back-to-top/back-to-top.component';
import { CertificateComponent } from './clients/certificate/certificate.component';
import { ProductComponent } from './clients/product/product.component';
import { FooterComponent } from './clients/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutComponent,
    SocialsComponent,
    SkillsComponent,
    BackToTopComponent,
    CertificateComponent,
    ProductComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
