import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[];
    constructor(){
        this.categories = [
            {id: 1, name: 'Dram'},
            {id: 2, name: 'Komedi'},
            {id: 3, name: 'Aksiyon'},
            {id: 4, name: 'Korku'}
        ];
    }

    getCategories(): Category[]{
        return this.categories;
    }

}