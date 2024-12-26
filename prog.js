let sampleList = ["A", "B", "C", "D", "E"]

function recursionLogic(list){

    if(list.length === 0){return};

    let index = Math.floor(Math.random()*list.length);

    let randomElement = list[index];
    console.log(randomElement);
    
    list.splice(index, 1);
    recursionLogic(list);
    
}

recursionLogic(sampleList)