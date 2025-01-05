const butt=document.querySelector('.tic-tac-toe');
let turn='O'; let board_turn=0;
const win=document.querySelector('.win');

const winn=[[0,1,2],[3,4,5],[6,7,8],
          [0,3,6],[1,4,7],[2,5,8],
           [0,4,8],[2,4,6]];
let board_array=new Array(9).fill("E");
function check(){
    for(let [i,j,k] of winn){
          if(board_array[i] === board_array[j] && board_array[j] === board_array[k] && board_array[i] !== "E"){
            return 1;
          }
    }
    return 0;
} 
function print(e){
   
    const ele=e.target;
 if(board_array[e.target.id]==="E"){  board_turn++;
if(turn==='O'){
    ele.innerHTML="O";
    board_array[ele.id]="O";
    turn="X";

    if(check()){
win.innerHTML=" winner is O";
butt.removeEventListener('click',print);
return;
    }

}
else{
    ele.innerHTML="X";
    board_array[ele.id]="X";
    turn="O";
    if(check()){win.innerHTML=" winner is X";
        butt.removeEventListener('click',print);
        return;
    }
}

 }
 if(board_turn==9) win.innerHTML="MATCH IS DRAW";
}

butt.addEventListener('click',print);

//forr reset
const reset=document.querySelector('.reset-btn');
reset.addEventListener('click',()=>{
  const cell=  document.getElementsByClassName('cell');
  Array.from(cell).forEach((val)=>{
     val.innerHTML="";
  }) 
  turn='O';
  board_turn=0;
  board_array=new Array(9).fill("E");
  butt.addEventListener('click',print);

  document.querySelector('.win').innerHTML=" ";
} 

)