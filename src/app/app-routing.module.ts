import { FoodComponent } from './pages/world/food/food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MapComponent } from "./pages/world//map/map.component";
import { CharactersComponent } from './pages/common/characters/characters.component';
import { CharacterShowcaseComponent } from './pages/common/character-showcase/character-showcase.component';
import { MageComponent } from './pages/cultures/mage/mage.component';
import { SourcesComponent } from './pages/magic/sources/sources.component';
import { AnimalsComponent } from './pages/world/animals/animals.component';
import { ImprintComponent } from './pages/misc/imprint/imprint.component';
import { PageNotFoundComponent } from './pages/misc/pagenotfound/page-not-found.component';
import { GlossaryComponent } from './pages/world/glossary/glossary.component';
import { StatisticsComponent } from './pages/magic/statistics/statistics.component';
import { ArtifactsComponent } from './pages/magic/artifacts/artifacts.component';
import { RunesComponent } from './pages/mahoa/runes/runes.component';
import { VocabularyComponent } from './pages/mahoa/vocabulary/vocabulary.component';
import { TestComponent } from './pages/common/test/test.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
    pathMatch: 'full',
  },
  { path: 'characters/character-showcase/:characterType', component: CharacterShowcaseComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'common/test', component: TestComponent, pathMatch: 'full' },
  { path: 'world/map', component: MapComponent, pathMatch: 'full' },
  { path: 'mahoa/runes', component: RunesComponent, pathMatch: 'full' },
  { path: 'mahoa/vocabulary', component: VocabularyComponent, pathMatch: 'full' },
  { path: 'cultures/mages', component: MageComponent, pathMatch: 'full' },
  { path: 'magic/sources', component: SourcesComponent, pathMatch: 'full' },
  { path: 'magic/statistics', component: StatisticsComponent, pathMatch: 'full' },
  { path: 'magic/artifacts', component: ArtifactsComponent, pathMatch: 'full' },
  { path: 'world/food', component: FoodComponent, pathMatch: 'full' },
  { path: 'world/glossary', component: GlossaryComponent, pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent, pathMatch: 'full' },
  { path: 'imprint', component: ImprintComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
