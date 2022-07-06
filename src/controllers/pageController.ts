import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (request: Request, response: Response) => {
  let list = Pet.getAll();

  response.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  });
}
export const dogs = (request: Request, response: Response) => {
  let list = Pet.getByType('dog');

  response.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  });
}
export const cats = (request: Request, response: Response) => {
  let list = Pet.getByType('cat');

  response.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  });
}
export const fishes = (request: Request, response: Response) => {
  let list = Pet.getByType('fish');

  response.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
  });
}