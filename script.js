// js code

const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value ;
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    
     const celToFah= (cel)=>{
              let Fahrenheit = Math.round((cel*9/5)+32);
              return Fahrenheit;
     }

     const fahToCel = (feh)=>{
        let Celsius = Math.round((feh-32)*5/9);
        return Celsius;
     }

    let result;
    if(numberTemp==""){
        document.getElementById('resultContainer').innerHTML= `Please Enter value`;
        document.getElementById('resultContainer').style.color="red";
    }
    else{
        if(valueTemp=='cel'){
            result = celToFah(numberTemp);
            document.getElementById('resultContainer').innerHTML= `${result}°Fahrenheit`
            document.getElementById('resultContainer').style.color="Green";
        }
        else{
            result = fahToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML= `${result}°Celsius`
            document.getElementById('resultContainer').style.color="green";
        }
    }
    
}


