name1="Navin";
console.log(name1.slice(1,3))
console.log(name1[0])
console.log(name1.charAt(0))
console.log("at="+name1.at(-1))
console.log(name1.length)
for(let i=name1.length-1;i>=0;i--){
    console.log(name1.charAt(i))
}

a=[10,20]
a.push(30)
for(let e of a){
    console.log(e)
}
a.pop()
for(let e of a){
    console.log(e)
}
a.reverse()
console.log(a)