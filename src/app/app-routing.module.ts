import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

// 导入路由器的模块
import { Routes, RouterModule } from '@angular/router';

//路由映射数组
// 完成这些设置之后，路由器将会把 URL 匹配到 path: 'heroes'，并显示 HeroesComponent。
const routes: Routes = [

  // 如果匹配到全路径（pathMatch为full）为空路径（path的值为空）的话重定向到/dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // 如果匹配到/heroes的话路由到HeroesComponent组件
  { path: 'heroes', component: HeroesComponent },

  // 如果匹配到/dashboard的话路由到DashboardComponent组件
  { path: 'dashboard', component: DashboardComponent },

  // 如果匹配到/detail/的话，将携带后面的id作为参数，路由到HeroDetailComponent组件
  { path: 'detail/:id', component : HeroDetailComponent }
];

// RouterModule.forRoot()
// 你必须首先初始化路由器，并让它开始监听浏览器中的地址变化。
// 把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。
// 你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
