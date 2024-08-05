import { Pipe, PipeTransform } from '@angular/core';
import { LikePosts } from '../interfaces/like-posts';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: LikePosts[]): LikePosts[] {
    return Array(value.length).fill(null)
      .map((_, i) => [Math.random(), i])
      .sort(([a], [b]) => a - b)
      .map(([, i]) => value[i])
  }


}
