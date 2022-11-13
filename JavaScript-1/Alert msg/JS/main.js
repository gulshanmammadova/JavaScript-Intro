var time=new Date().getHours();
if(0<=time && time<6 || time===24){
  alert("Geceniz xeyire");
  document.body.style.backgroundColor ="#24243e";
}
else if(6<=time && time<=11)
{
  alert("Sabahiniz xeyir");
  document.body.style.backgroundColor ="#ffc500"
}
else if(11<time && time<=3){
  alert("Gunortaniz xeyir");
  document.body.style.backgroundColor ="#f7ff00";
}
else if(3<time && time<=8){
  alert("Her vaxtiniz xeyir");
  document.body.style.backgroundColor ="#b92b27";
}
else if(8<time && time<=23){
  alert("axsainiz xeyir");
  document.body.style.backgroundColor ="#4286f4";
}