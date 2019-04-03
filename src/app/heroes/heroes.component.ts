import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  //定义一个对象数据
  heroes :Hero[];
  
  
  //在构造函数的入参处注入HeroService
  // 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
  // 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
  constructor(private heroService : HeroService) {
  }
  

  
  //调用service给类的heroes属性赋值
  getHeroes():void{
    //调用service的方法，该方法返回一个Observable<T>，调用Observable的subscribe监听回调
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes=heroes
      );
  }
  // Observable.subscribe() 是关键的差异点。
  // 上一个版本把英雄的数组赋值给了该组件的 heroes 属性。 这种赋值是同步的，这里包含的假设是服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面。
  // 当 HeroService 真的向远端服务器发起请求时，这种方式就行不通了。
  // 新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 然后，subscribe 函数把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。
  // 使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了。

  
  //在初始化方法中调用数据渲染页面
  ngOnInit() {
    this.getHeroes();
  }
  
}
