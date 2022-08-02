// 解析地址栏后面的kv
const parse = (url) => {
  const l = new URL(url).searchParams;
  let obj = {};
  l.forEach((v, k) => {
    console.log(v, k)
    obj[k] = v;
  });
  return obj;
};
const url = "http://sample.com/?a=1&b=2&c=xx&d=2#hash";

const a=  parse(url);
console.log(a);