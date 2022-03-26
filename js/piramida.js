let floor = +prompt('Введите количество ярусов');
let tree ='*';
let space ='';
for (let i = 0; i < floor-1 ; i++) {
    for (let j = 0; j < (floor - i); j++) {
        space = space + ' '
    }
    if (i===0){
        console.log(space + ' ' + tree)}
    tree = tree + '**';
    console.log(space + tree);
    space = '';
}
