import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll(): { name: string; color: string; price: number }[] {
    return [
      {
        name: 'Rose',
        color: 'red',
        price: 5,
      },
      {
        name: 'Tulip',
        color: 'yellow',
        price: 6,
      },
      {
        name: 'Lily',
        color: 'white',
        price: 7,
      },
    ];
  }
}
