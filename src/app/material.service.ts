import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { }
  accordion_arr = [
    {
      title: 'Panel 1',
      description: 'This first panel',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit qui veritatis illum dignissimos natus tempore delectus deserunt neque illo. Atque esse maxime accusantium natus, voluptatem nulla debitis voluptates ab.'
    },
    {
      title: 'Panel 2',
      description: 'This second panel',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati, quasi ipsa molestiae quidem beatae facere tempore dolores nihil corrupti!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit qui veritatis illum dignissimos natus tempore delectus deserunt neque illo. Atque esse maxime accusantium natus, voluptatem nulla debitis voluptates ab Quaerat suscipit qui veritatis illum dignissimos natus tempore delectus deserunt neque illo. Atque esse maxime accusantium natus, voluptatem nulla debitis voluptates ab.'
    },
    {
      title: 'Panel 3',
      description: 'This third panel',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus necessitatibus dignissimos soluta libero fugiat, impedit nisi accusantium. Ipsam obcaecati, quasi ipsa molestiae quidem beatae facere tempore dolores nihil corrupti!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati, quasi ipsa molestiae quidem beatae facere tempore dolores nihil corrupti!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit qui veritatis illum dignissimos natus tempore delectus deserunt neque illo. Atque esse maxime accusantium natus, voluptatem nulla debitis voluptates ab Quaerat suscipit qui veritatis illum dignissimos natus tempore delectus deserunt neque illo. Atque esse maxime accusantium natus, voluptatem nulla debitis voluptates ab.'
    }
  ]
}
