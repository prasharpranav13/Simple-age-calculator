let userInput=document.getElementById("date");
//to avoid selection of future date
userInput.max=new Date().toISOString().split("T")[0];

let calcBtn=document.getElementsByClassName("btn")[0];
calcBtn.onclick=()=>{
ageCalculator();
}

const ageCalculator=()=>{
  let birthDay=new Date(userInput.value);

  let d1=birthDay.getDate();
  let m1=birthDay.getMonth()+1;//as it'll give month from 0 
  let y1=birthDay.getFullYear();

  let today=new Date();

  let d2=today.getDate();
  let m2=today.getMonth()+1;
  let y2=today.getFullYear();

  let d3,m3,y3;
  //year
  y3=y2-y1;
//month
  if(m2>=m1){
    m3=m2-m1;
  }
  else{
    y3--;
    m3=12+(m2-m1); //as m1-m2 <0
  }
  //date
  if(d2>=d1){
    d3=d2-d1;
  }
  else{
    m3--;
    if(m3<0)
    {
      m3=11;
      y3--;
    }
    d3=getDaysInMonth(y1,m1)+(d2-d1);
  }

  // console .log(y3,m3,d3);

  //to get days in a month
  function getDaysInMonth(year,month){
    let reqMonth=new Date(year,month,0);
    return reqMonth.getDate();
  }


  let result=document.getElementById("result");
 result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}
