import React from "react"

import { useRef,useState } from "react"



const Buttons=function ({onClick,inputs}){
  return (
    <button onClick={onClick}>{inputs}</button>
  )
}

let arr1=[]
let arr2=[]
let numbers=[];

let negativenum;

//let sidedisplay=""
//trying to use a variable for managing negative numbers as when negative numbers are entered there are 2 opearatoos at once
//at this place i need to move the operator to op array and multiple the next number with minus 1(-1)

//let num0=0;
let op=[];


function App(){

  const [display,setDisplay]=useState("0")

  function oneinp(){
    if(display==="0"){
    setDisplay("1")
    }
    else{
setDisplay(display+"1")
    }
  
    arr1.push("1")
    console.log(arr1)
    
    //sidedisplay=sidedisplay+display
    //console.log(sidedisplay)
    
  }
  function twoinp(){
     
  if(display==="0"){
    setDisplay("2")
    }
    else{
setDisplay(display+"2")
    }
  arr1.push("2")
  }

  function threeinp(){
     
         
  if(display==="0"){
    setDisplay("3")
    }
    else{
setDisplay(display+"3")
    }
    arr1.push("3")
    console.log(arr1)
    }

    function fourinp(){
       
           
  if(display==="0"){
    setDisplay("4")
    }
    else{
setDisplay(display+"4")
    }
      arr1.push("4")
      }

      function fiveinp(){
         if(display==="0"){
    setDisplay("5")
    }
    else{
setDisplay(display+"5")
    }
       
        arr1.push("5")
        }

        function sixinp(){
           
         if(display==="0"){
    setDisplay("6")
    }
    else{
setDisplay(display+"6")
    }
          arr1.push("6")
          }

          function seveninp(){
           
           if(display==="0"){
    setDisplay("7")
    }
    else{
setDisplay(display+"7")
    }
            arr1.push("7")
            }
    
            function eightinp(){
              if(display==="0"){
    setDisplay("8")
    }
    else{
setDisplay(display+"8")
    }
              arr1.push("8")
              }
  
              function nineinp(){
                if(display==="0"){
    setDisplay("9")
    }
    else{
setDisplay(display+"9")
    }
                 
                arr1.push("9")
                }

                function zeroinp(){
             if(display==="0"){
            arr1.push("0")
             }  
                  else{
setDisplay(display+"0")
                  arr1.push("0")
                  }
                  }

                  function decimalinp(){
                   
                    if(arr1.indexOf(".")===-1){
                      
                    
                    arr1.push(".")
                      
                      //bolow if else statement for managing situaion of appending a zero before decimal is a number is just starting from . like for input of 1+.6 will be shown as 1+0.6 using arr1 to check a decimal at zero place and appening a 0 only in display in that case
                      if(arr1[0]==="."){
                        setDisplay(display+"0"+".")
}
                      else{
setDisplay(display+".")}
                    }
                    //there is iisue with placing decimal as a number in array, so i have to manage is here as string
                    //later i will see whether i need have all arr1 values as string or i can manage
                    else{
                      setDisplay(display)
                    }
                    
                  }



                

 
                    
                //function delete1(){
                 // console.log(display[display.length-1])
                  //setDisplay(display.splice(display.length))
                
               // }

                function add(){
   
                  //little complicated code here i need to do it multiple user story, below codeblock check that is 2 consecutive opearation when entered it should in effect only perfrom opearation for 2nd opearation and then for that in first codde block i need to manage the arr1 and arr2 that on 2nd opearation arr1 is already empty adn number is in arr2 so in this condition i need to not touch arr1 and it is already empty on consective ops so only op shoudl eb changed
                  if(display[display.length-1]==="+" || display[display.length-1]==="-"  || display[display.length-1]==="*"  || display[display.length-1]==="/"){
                         
                    if(negativenum){
                      negativenum="dont"
                    }
                    //comment 1
                    //checks wheter negative num is present if present that means there was a minus after and operation upto this opeartio ex
                    //(2=- *3 or 4+-/2) as in this case of 2 ops together with later - i treat this minus as -1 and mutiply next number in 
                    //numbers with -1 to make it negative, but now a after this another op is entered it means that we dont have to make or take 
                    //next number as negative as this negative number actually makes next no negative so we are going to remove its effect
                    //by giving negativenum a specific string value "dont" and in later equalto function i added a condtion for negativenum 
                    //that only make next no negative if negativenum is not equal to "dont "
                 //see the equalto, subtract and add etc function for more
                 
                  
                  //for(let i=0;i<display.length;i++){
                  //   arr1.push(display[i])
                   //  console.log(arr1)
                //}
                  //setDisplay(display.slice(0,displ//ay[display.length-1]))
        //setDisplay(display.add("+"))   
                    op.pop()
                   op.push("+")
                    setDisplay(display+"+")

                }
                     
                 else{
                   if(arr1[arr1.length-1]==="."){
                   setDisplay(display+"0"+"+")
                 } 
                  else{
setDisplay(display+"+")
                  } console.log(display[0])
                  //for(let i=0;i<display.length;i++){
                  //   arr1.push(display[i])
                   //  console.log(arr1)
                //}
                  
                   arr2.push(arr1.join(""))
                   console.log(arr2)
                   console.log(arr1)
                   arr1=[]
                   console.log(arr1)
                   op.push("+")


                  

                 }
                }
  
  
                 function subt(){
                              if(display[display.length-1]==="+" || display[display.length-1]==="-"  || display[display.length-1]==="*"  || display[display.length-1]==="/"){
                                            
                 
                               
                   
                    //op.pop()
                   //op.push("-")

                    setDisplay(display+"-")

                    negativenum=parseInt(arr2[arr2.length-1],10)
                    console.log(negativenum)
                    //trying a method which will not work in case when number before this case(+-,--,*-,/-) of double op with 
                    //2nd minus(-) is present multiple times as  in this i am simplely muiplying the number after this combination with -1 
                    //to make it -ve number.
                    //will try to fix this in future
                    //currently i need to move a little furthur "-")




                }
                     
                 else{
                   if(arr1[arr1.length-1]==="."){
                   setDisplay(display+"0"+"-")
                 } 
                  else{
setDisplay(display+"-")
                  } console.log(display[0])
                 
                  
                   arr2.push(arr1.join(""))
                   console.log(arr2)
                   console.log(arr1)
                   arr1=[]
                   console.log(arr1)
                   op.push("-")


                  

                 }
                  
                }
                 function multiply(){
                 
                 if(display[display.length-1]==="+" || display[display.length-1]==="-"  || display[display.length-1]==="*"  || display[display.length-1]==="/"){
                         
                   
                  if(negativenum){
                    negativenum="dont"
                  }
                  //comment 1
                  
                  
                   
                    op.pop()
                   op.push("*")
                    setDisplay(display+"*")

                }
                     
                 else{
                   if(arr1[arr1.length-1]==="."){
                   setDisplay(display+"0"+"*")
                 } 
                  else{
setDisplay(display+"*")
                  } console.log(display[0])
                 
                  
                   arr2.push(arr1.join(""))
                   console.log(arr2)
                   console.log(arr1)
                   arr1=[]
                   console.log(arr1)
                   op.push("*")


                  

                 }
                  
                }
                function divide(){
                 
               if(display[display.length-1]==="+" || display[display.length-1]==="-"  || display[display.length-1]==="*"  || display[display.length-1]==="/"){
                         
                if(negativenum){
                  negativenum="dont"
                }
                //comment 1
                
                 
                  
                   
                    op.pop()
                   op.push("/")
                    setDisplay(display+"/")

                }
                     
                 else{
                   if(arr1[arr1.length-1]==="."){
                   setDisplay(display+"0"+"/")
                 } 
                  else{
setDisplay(display+"/")
                  } console.log(display[0])
                 
                  
                   arr2.push(arr1.join(""))
                   console.log(arr2)
                   console.log(arr1)
                   arr1=[]
                   console.log(arr1)
                   op.push("/")


                  

                 }
                    
                }

                function delete1(){
                  
                  setDisplay(display.slice(0,display.length-1))
                  //need to implement logic for managing the arrays used in opearation when deleting a valaue
                  //deleted numbers should not interfere in opearation
                }
                
                  function clear(){
                    setDisplay("")
                    arr1=["0"]
                    arr2=[]
                    numbers=[]
                    op=[]
                    setDisplay("0")

                  }

                function equalto(){
                 if(display[display.length-1]==="."){
                   setDisplay(display+"0")
                   arr2.push(arr1.join(""))
                  arr1=[]
                  
                  numbers=arr2.map(x=>parseFloat(x,10))

                  if(negativenum){
                    if(negativenum!=="dont"){
                    console.log(negativenum)
                    let indexminusone=numbers.indexOf(negativenum)
                    
                    let indexminus=indexminusone+1;
                    console.log(indexminus)
                    console.log(numbers[indexminus])
                    
                    numbers[indexminus]=numbers[indexminus]*(-1);
                    console.log(numbers[indexminus])
                    console.log(numbers)
                    }
                  }
                   
                   //above code for managing ive numbers in calcualtion by getting the index of number before -ve number in numbers array 
                   //which hold the numbers and then the next number to this number which is at index of indexminus in numbers and 
                   //mutiplying it by -1 and putting it numbers array by replcing its positive value.
                   //to understand it fully see the subtraction function

                  console.log(numbers)
                  console.log(op)
                  let answer=numbers.shift()
                  //console.log(num0)

                  for(let j=0;j<numbers.length;j++){
                    if(op[j]==="+"){
                    answer=answer+numbers[j]

                  }
                  if(op[j]==="-"){
                    answer=answer-numbers[j]

                  }
                  if(op[j]==="*"){
                    answer=answer*numbers[j]

                  }

                  if(op[j]==="/"){
                    answer=answer/numbers[j]

                  }

                }
                
                console.log(answer)
              
            setDisplay(answer.toString())
            //setDisplay(answer)
                 op=[]
                 
                 arr1.push(answer.toString())
                 //setDisplay(arr1[0])
                 arr2=[]
                 numbers=[] 

                console.log(arr1)
                console.log(arr1[0])
                  
                 }
                  
                  //i did 2 similiar code block as when the last digit is . like in 4+3.
                  //user story says screens should look like 4+3.0
                  //so my code checks at = that last if last digit is . then it adds a 0 and before opearating tese if else block only for 1 line of code for last decimal condition.
                  
                 else{
                  arr2.push(arr1.join(""))
                  arr1=[]
                  setDisplay("=")
                  numbers=arr2.map(x=>parseFloat(x,10))

                  console.log(numbers)

                  
                  if(negativenum){
                    if(negativenum!=="dont"){
                    console.log(negativenum)
                    let indexminusone=numbers.indexOf(negativenum)
                    
                    let indexminus=indexminusone+1;
                    console.log(indexminus)
                    console.log(numbers[indexminus])
                    
                    numbers[indexminus]=numbers[indexminus]*(-1);
                    console.log(numbers[indexminus])
                    console.log(numbers)
                    }
                  }
                  console.log(numbers)
                  console.log(op)
                  let answer=numbers.shift()
                  //console.log(num0)

                  for(let j=0;j<numbers.length;j++){
                    if(op[j]==="+"){
                    answer=answer+numbers[j]

                  }
                  if(op[j]==="-"){
                    answer=answer-numbers[j]

                  }
                  if(op[j]==="*"){
                    answer=answer*numbers[j]

                  }

                  if(op[j]==="/"){
                    answer=answer/numbers[j]

                  }

                }
                
                console.log(answer)
                    // let strdis=answer.tostring()  
            setDisplay(answer.toString())
           
                //setDisplay(answer)
                 op=[]
                
                 arr1.push(answer.toString())
                 //setDisplay(arr1[0])
                 arr2=[]
                 numbers=[] 
//numbers is similar array to arr2 just strings converted to decimal numbers
                console.log(arr1)
                console.log(arr1[0])
                  
                  //now we have same numbers of operations as numbers we can use a single loop for updating answer to final
                  //value or opearation starting from num0 or first number in opearation



                 }
            
                }


 


return(
  <div id="box">
    <div id="display">
     {display}
    </div>
    <div id="inputs">
    <div>
      <button onClick={oneinp} id="one">1</button>
    <button inputs="2" onClick={twoinp} id="two">2</button>
    <button inputs="3" onClick={threeinp} id="three">3</button>
    </div>
    <div>
    <button inputs="4" onClick={fourinp} id="four">4</button>
    <button inputs="5" onClick={fiveinp} id="five">5</button>
    <button inputs="6" onClick={sixinp} id="six">6</button>
    </div>
    <div>
    <button inputs="7" onClick={seveninp} id="seven">7</button>
    <button inputs="8" onClick={eightinp} id="eight">8</button>
    <button inputs="9" onClick={nineinp} id="nine">9</button>
    
    </div>
    <div>
    <button inputs="0" onClick={zeroinp} id="zero">0</button>
    <button inputs="." onClick={decimalinp} id="decimal">.</button>
    <button id="add" inputs="+" onClick={add}>+</button>
    </div>
    <div>
    <button id="subt" inputs="-" onClick={subt}>-</button>
    <button id="multiply" inputs="×" onClick={multiply}>×</button>
    <button id="divide" inputs="/" onClick={divide}>/</button>
    </div>
    <div>
    <button inputs="=" id="equals" onClick={equalto}>=</button>
    <button id="clear" inputs="AC" onClick={clear}>AC</button>
    <button inputs="delete" onClick={delete1}>Delete</button>
    </div>
    

    </div>
  </div>
)
                }






export default App;


