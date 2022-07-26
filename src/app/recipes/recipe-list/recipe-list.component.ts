import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test.', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
    new Recipe('A test Recipe', 'This is simply a test.', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
    new Recipe('A test Recipe', 'This is simply a test.', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
