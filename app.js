let bill = document.getElementById('biller');
let fivepersent = document.getElementById('five');
let tenpersent = document.getElementById('ten');
let fifitenpersent = document.getElementById('fifiten');
let twentyfivepersent = document.getElementById('twentyfive');
let fivetypersent = document.getElementById('fivety');
let custompersent = document.getElementById('custom');
let people = document.getElementById('num-people');
let tipamount = document.getElementById('priceone');
let tipperson = document.getElementById('pricetwo');
let err = document.getElementById('errors');
let btnbutton = document.getElementById('btn');
fivepersent.addEventListener('click',()=>{
let val = bill.value*0.05;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
tenpersent.addEventListener('click',()=>{
let val = bill.value*0.1;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
fifitenpersent.addEventListener('click',()=>{
let val = bill.value*0.15;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
twentyfivepersent.addEventListener('click',()=>{
let val = bill.value*0.25;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
fivetypersent.addEventListener('click',()=>{
let val = bill.value*0.5;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
custompersent.addEventListener('keyup',()=>{
let val = bill.value*custompersent.value/100;
tipamount.innerHTML = `$${display(val)}`;
let per = bill.value/people.value+val;
tipperson.innerHTML = `$${display(per)}`;
})
function display(zero){
    return zero.toFixed(2);
}
bill.addEventListener('keyup',()=>{
let amount = bill.value;
tipamount.innerHTML = `$${amount}`;
})
people.addEventListener('keyup',()=>{
    if(people.value == 0){
    tipperson.innerHTML = `$0.00`;
    setTimeout(()=>{
    err.style.display = 'block';
    },500)
    }
   else{
    let per = bill.value/people.value;
    tipperson.innerHTML = `$${display(per)}`;
    err.style.display = 'none';
   }
})
btnbutton.addEventListener('click',()=>{
bill.value = '0';
people.value = '0';
tipamount.innerHTML = '$0.00';
tipperson.innerHTML = '$0.00';
})