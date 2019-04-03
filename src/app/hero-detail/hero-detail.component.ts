import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 添加一个带有@Input装饰器的hero属性
  hero: Hero;


  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
  // paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // 后退
  goBack(): void {
    this.location.back();
  }
}
