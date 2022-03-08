class Pubsub {
  constructor() {
    // 订阅者管理器
    this.listeners = [];
  }

  subscribe = (listener) => {
    // func 判断
    this.listeners.push(listener);
  };

  publish = () => {
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i];
      listener();
    }
  };
}


const p = new Pubsub();
p.subscribe(() => {
    console.log('订阅了 折木的人生')
}) 

p.publish();