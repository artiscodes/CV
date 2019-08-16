import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { LanguageService } from './services/language.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './share/translate.pipe';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from '@angular/router';
import { EducationComponent } from './main/education/education.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactFormComponent } from './main/contact-form/contact-form.component';
import { ProjectComponent } from './main/project/project.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { SkillsComponent } from './main/skills/skills.component';
import { PersonComponent } from './main/person/person.component';
import { SentsuccComponent } from './main/contact-form/sentsucc/sentsucc.component';
import { SenterrorComponent } from './main/contact-form/senterror/senterror.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projects/:id',
    component: ProjectComponent
  },
  {
    path: 'login',
    component: MainComponent
  },
  {
    path: 'sent-error',
    component: SenterrorComponent
  },
  {
    path: 'sent-success',
    component: SentsuccComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    TranslatePipe,
    TestComponent,
    EducationComponent,
    ProjectsComponent,
    ContactFormComponent,
    ProjectComponent,
    ExperienceComponent,
    SkillsComponent,
    PersonComponent,
    SentsuccComponent,
    SenterrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LanguageService, TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
