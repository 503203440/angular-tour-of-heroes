import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //申明一个字符串数组存放消息
  messages:string[]=[];

  /**
   * 增加消息
   * @param message 
   */
  add(message:string):void{
    this.messages.push(message);
  }

  /**
   * 清空消息
   */
  clear():void{
    this.messages=[];
  }


  constructor() { }
}
