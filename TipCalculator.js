
function myCode()
{
   if(document.getElementById("currency") != null)
    var bill= document.getElementById("currency").value;

  

    if(document.getElementById("number1") != null) 
    var people_count = document.getElementById("number1").value;

    if(document.getElementById("select") != null)
     var select_value=document.getElementById("select").value;
  

 

    class Calculator 
    {
    constructor(bill,people_count,select_value)
        {
        Object.assign(this , {bill,people_count,select_value})
         }

    calculateTip()
        {
        let _billamnt = this.bill * this.select_value;
        return (_billamnt/this.people_count).toFixed(2);
        }
    }

   let Calc = new Calculator(bill,people_count,select_value);
   console.log(Calc.calculateTip());
   console.log(bill);
   document.getElementById('result').style.visibility='visible';
   document.getElementById('tip').innerHTML=Calc.calculateTip();
}
  
    





//Invoking the values from input ;


