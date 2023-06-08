let x=(year)=>{
    if(year%4==0){
        console.log("leapyear");
    }
    else if(year%400==0){
        console.log("leapyear");
    }
    else if(year%100==0){
        console.log("leapyear");
    }
    else
    {
        console.log("It's not leap year")
    }
    
}
x(2016)
