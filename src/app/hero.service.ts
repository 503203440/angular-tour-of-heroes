import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {MessageService} from './message.service';

import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  //获取到所有数据的方法，此处返回的是模拟数据
  getHeroes():Observable<Hero[]>{
    //在获取到英雄数组时发送一条消息
    this.messageService.add('不得了啦获取到消息啦!');
    return of(HEROES);
  }

  //获取到单个数据的方法
  getHero(id:number):Observable<Hero>{
    // 增加一条消息，注意，反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id。
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // 返回id为参数的hero对象
    return of(HEROES.find(hero => hero.id === id));
  }

}
