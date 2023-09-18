import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor(){
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();

  }
}
