export const TITLE = 'title';
export const PORTION = 'portion';
export const CATEGORY = 'category';
export const COMPONENTS = 'components';
export const CONTENT = 'content';
export const PHOTOS = 'photos';

class Recipe {

  constructor() {
    this[TITLE] = '';
    this[PORTION] = '';
    this[CATEGORY] = '';
    this[COMPONENTS] = [];
    this[CONTENT] = '';
    this[PHOTOS] = [];
  }
}

export default Recipe;
