
//
// 1
// 2
// 3 foo
// 4
// 5 bar
// 6 foo
// ...
// 15 foobar
// ...
// 60 foobar
/*
for(i=1; i<=60; i++){
    console.log(i);
    //var str = "";
    if(i%15 === 0) {
        //str = "foo";
        console.log("foobar");
    }
    else if(i%5 === 0) {
        //str="bar";
        console.log("bar");
    }
    else if(i%3 === 0) {
        //str="foobar";
        console.log("foo");
    }
}*/
for(let i=1;i<=60;i++){
    let output = '';
    if(i%3 ===0) output+='Block';
    if(i%5 ===0) output += 'Chain';
    //console.log(output===''?i:output);
    console.log(output || i);

}