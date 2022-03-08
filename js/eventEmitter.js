// 事件发射器

class EventEmitter {
  constructor() {
    // topic管理器
    this._events = {};
  }

  on = (eventName, listener) => {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(listener);
  };

  emit = (eventName, ...args) => {
    this._events[eventName] &&
      this._events[eventName].forEach((element) => element.call(this, ...args));
  };

  off = (eventName, listener) => {
    this._events[eventName] &&
      (this._events[eventName] = this._events[eventName].filter(
        (l) => l !== listener && l.l !== listener // 添加的代码
      ));
  };
  once = (eventName, listener, ...args) => {
    const one = (...args) => {
      listener(...args);
      this.off(eventName, one);
    };
    one.l = listener; // 添加的代码
    this.on(eventName, one);
  };
}
const e = new EventEmitter();

const group = () => {
  console.log("订阅着1小伙伴1，  集合吃火锅了");
};

e.on("团建啦", group);
e.on("团建啦", () => {
  console.log("订阅着2小伙伴2，  吃饭吧");
});

e.emit("团建啦");

e.off("团建啦", group);
e.emit("团建啦");
