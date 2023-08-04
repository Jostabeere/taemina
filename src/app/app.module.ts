import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from './pages/home/home.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { SpecializationIconComponent } from './components/specialization-icon/specialization-icon.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MagicChartGalleryComponent } from './components/magic-chart-gallery/magic-chart-gallery.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CharacterIconComponent } from './components/character-icon/character-icon.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { LoveInterestComponent } from './components/love-interest/love-interest.component';
import { TraitsCardComponent } from './components/cards/traits-card/traits-card.component';
import { SkillCardComponent } from './components/cards/skill-card/skill-card.component';
import { DescriptionCardComponent } from './components/cards/description-card/description-card.component';
import { routes } from "./app-routing.module";
import { CharactersTableComponent } from './components/table/characters-table/characters-table.component';
import { MatTableModule } from "@angular/material/table";
import { LooksCardComponent } from './components/cards/looks-card/looks-card.component';
import { ClassesCardComponent } from './components/cards/classes-card/classes-card.component';
import { PersonalityCardComponent } from './components/cards/personality-card/personality-card.component';
import { MatMenuModule } from "@angular/material/menu";
import { CardComponent } from './components/cards/card/card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { PageContentHeaderComponent } from './components/header/page-content-header/page-content-header.component';
import { FoodComponent } from './pages/world/food/food.component';
import { CharactersComponent } from './pages/common/characters/characters.component';
import { CharacterShowcaseComponent } from './pages/common/character-showcase/character-showcase.component';
import { PageNotFoundComponent } from './pages/misc/pagenotfound/page-not-found.component';
import { SourcesComponent } from './pages/magic/sources/sources.component';
import { ImprintComponent } from './pages/misc/imprint/imprint.component';
import { MageComponent } from './pages/cultures/mage/mage.component';
import { AnimalsComponent } from './pages/world/animals/animals.component';
import { GlossaryComponent } from './pages/world/glossary/glossary.component';
import { FactTableComponent } from './components/table/fact-table/fact-table.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StatisticsComponent } from './pages/magic/statistics/statistics.component';
import { MapComponent } from './pages/world/map/map.component';
import { ArtifactsComponent } from './pages/magic/artifacts/artifacts.component';
import { AvatarCardComponent } from './components/cards/avatar-card/avatar-card.component';
import { CardContainerComponent } from './components/container/card-container/card-container.component';
import { RunesComponent } from './pages/mahoa/runes/runes.component';
import { VocabularyComponent } from './pages/mahoa/vocabulary/vocabulary.component';
import { TestComponent } from './pages/common/test/test.component';
import { MatRadioModule } from '@angular/material/radio';
import { ThinSliderComponent } from './components/thin-slider/thin-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    CharacterShowcaseComponent,
    PageNotFoundComponent,
    SourcesComponent,
    SpecializationIconComponent,
    MagicChartGalleryComponent,
    CharacterIconComponent,
    LoveInterestComponent,
    TraitsCardComponent,
    SkillCardComponent,
    DescriptionCardComponent,
    CharactersTableComponent,
    LooksCardComponent,
    ClassesCardComponent,
    PersonalityCardComponent,
    ImprintComponent,
    CardComponent,
    MageComponent,
    PageContentHeaderComponent,
    AnimalsComponent,
    FoodComponent,
    GlossaryComponent,
    FactTableComponent,
    AvatarComponent,
    StatisticsComponent,
    ArtifactsComponent,
    AvatarCardComponent,
    CardContainerComponent,
    RunesComponent,
    VocabularyComponent,
    TestComponent,
    ThinSliderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    MatSortModule,
    MatTabsModule,
    NgxChartsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTableModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSidenavModule,
    HttpClientModule,
    MatRadioModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
