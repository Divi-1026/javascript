const form=document.querySelector('form');
const id=document.getElementById('income');
const res=document.getElementById('result');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const income=id.value; let tax=0;
if (income <= 250000) {
    tax = 0; // No tax for income up to 2.5 lakh
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05; // 5% tax for income between 2.5L to 5L
  } else if (income <= 1000000) {
    tax = (250000 * 0.05) + (income - 500000) * 0.2; // 20% tax for income between 5L to 10L
  } else {
    tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3; // 30% tax for income above 10L
  }
res.innerHTML=`${tax}`
})