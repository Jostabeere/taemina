
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { PageContentHeaderComponent } from 'src/app/components/header/page-content-header/page-content-header.component';
import { quizQuestions } from 'src/app/data/QuizData';
import { Character } from 'src/app/models/character/Character';
import { CharacterType } from 'src/app/models/character/CharacterType';
import { QuizQuestion } from 'src/app/models/quiz/QuizQuestion';
import { CharacterService } from 'src/app/service/CharacterService';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup,
    PageContentHeaderComponent,
    MatDivider,
    RouterModule,
    MatButtonModule,
    FormsModule
],
})
export class TestComponent {
  readonly questions: QuizQuestion[] = quizQuestions;
  result: Character | undefined;
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { character: this.result },
    });
  }

  results: { character: CharacterType; count: number }[] = [
    { character: CharacterType.sora, count: 0 },
    { character: CharacterType.adryan, count: 0 },
    { character: CharacterType.valda, count: 0 },
    { character: CharacterType.halona, count: 0 },
    { character: CharacterType.lior, count: 0 },
    { character: CharacterType.albert, count: 0 },
    { character: CharacterType.bayu, count: 0 },
    { character: CharacterType.ivy, count: 0 },
    { character: CharacterType.valin, count: 0 },
  ];

  currentSelection: { questionId: number; characters: CharacterType[] }[] = [];

  evaluateResult() {
    let results = [
      { character: CharacterType.sora, count: 0 },
      { character: CharacterType.adryan, count: 0 },
      { character: CharacterType.valda, count: 0 },
      { character: CharacterType.halona, count: 0 },
      { character: CharacterType.lior, count: 0 },
      { character: CharacterType.albert, count: 0 },
      { character: CharacterType.bayu, count: 0 },
      { character: CharacterType.ivy, count: 0 },
      { character: CharacterType.valin, count: 0 },
    ];

    results.forEach((res) => {
      this.currentSelection
        .flatMap((e) => e.characters)
        .forEach((selection) => {
          if (selection == res.character) {
            res.count++;
          }
        });
    });

    console.log('results ' + results.map((r) => r.count + ' ' + r.character));

    this.result = CharacterService.getCharacterByCharacterType(
      this.getHighestRatedCharacter(results)
    );
    this.openDialog();
  }

  getHighestRatedCharacter(
    results: {
      character: CharacterType;
      count: number;
    }[]
  ): CharacterType {
    const maxElem = results.reduce(function (
      prev: { character: CharacterType; count: number },
      current: { character: CharacterType; count: number }
    ) {
      return prev.count > current.count ? prev : current;
    });
    return maxElem.character;
  }

  onChange(optionId: number, questionId: number, characters: CharacterType[]) {
    console.log(
      'option id ' + optionId + ', question id ' + questionId + ' ' + characters
    );

    var existingElement = this.currentSelection.find(
      (el) => el.questionId == questionId
    );
    if (existingElement) {
      existingElement.characters = characters;
    } else {
      this.currentSelection.push({ questionId, characters });
    }
    console.log(
      'currentSelection ' +
        this.currentSelection.map((r) => r.questionId + ' ' + r.characters)
    );
  }
}
