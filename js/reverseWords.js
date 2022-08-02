// 字符串去空格，反转

const s = "  hello  world!  ";


const reverseWords = (s) => {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}

console.log(s.trim())
console.log(s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' '))


// /\s+/g , 匹配所有的空白字符，