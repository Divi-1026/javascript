let timerr=document.getElementById('time');
let day_cnt=document.getElementById('days');
day_cnt.style.fontSize="7rem";
timerr.style.fontSize="2.5rem";
function change(){
    const olympic_date=new Date("July 21,2028 00:00:00").getTime();
    const current_date=new Date().getTime();
    const diff=olympic_date-current_date;
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    day_cnt.innerHTML=`${days}d`;
    timerr.innerHTML=`${hours}h ${minutes}m ${seconds}s`;
    if(diff<0){
        clearInterval(x);
        timerr.innerHTML="The Summner Olympics 2028 has started!";
    }
   

}
const x=setInterval(change,1000);