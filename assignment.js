//Problem No: 1 Convert feet To Mile
function feetToMile(feet){
    let dataType = typeof feet;
    if(dataType == 'number'){
        if(feet>0){
            let mile = (feet/5280).toFixed(6);
            return mile +" Mile";
        }else{return"0 or Negative value is not accepted";}
    }else{return"Input Should Be Number";}
}
let feet =100;
let Mile = feetToMile(feet);
console.log(Mile);


//Problem No: 2 Calculate Wood For your Chair, Table & Bad.
function woodCalculator(chair, table, bed){
    let chairDataType = Number.isInteger(chair);
    let tableDatatype = Number.isInteger(table);
    let bedDatatype  = Number.isInteger(bed);

    if(chairDataType==true && tableDatatype==true && bedDatatype ==true){
        if(chair>=0 && table>=0 && bed>=0){
            let totalWood = chair*1 + table*3 + bed*5;
            return totalWood + " Cube Wood";
        }else{return"Negative value is not acepted";}
    }else{return"Input Should Be Integer";}
}
let chair = 2; 
let table = 5;
let bed = 9;
let totalWood = woodCalculator(chair, table, bed);
console.log(totalWood);


//Problem No: 3 Find Bricks of a Building.....
function brickCalculator(floor){
    let floorDataType = Number.isInteger(floor);
    if(floorDataType==true){
        if(floor>0){
            if (floor<=10){
               let totalFeet = floor*15 ;
               let totalBricks = totalFeet*1000;
               return totalBricks +" Bricks";               
            }else if(floor>10 && floor<=20){
                let floorFeet12 = floor-10;
                let floorFeet15 = floor-floorFeet12;
                let totalFeet = floorFeet15*15 + floorFeet12*12;
                let totalBricks = totalFeet*1000;
                return totalBricks;
            }else{
                let floorFeet10 = floor-20;
                let totalFeet = 10*15 + 10*12 + floorFeet10*10;
                let totalBricks = totalFeet*1000;
                return totalBricks;
            }
        }else{return"Building Floor Should Not Be 0 Or Negative";}
    }else{return"Input Should Be integer";}
}

let floor = 21;
let totalBricks = brickCalculator(floor);
console.log(totalBricks);



//Problem No: 4 Find Out TinyFriend.....
function tinyFriend(friends){
    
    //Declare An Array to store array value length. 
    let numbers =[];
    for (i in friends){
        numbers.push(friends[i].length);
    }

    //Find min length value from array Declare Above.
    let tiny = Math.min.apply(Math, numbers);
    for(i in friends){
        if (tiny == friends[i].length){
            return friends[i];
        }
    }
    
}
let friends =['Rashedul Alam', 'alamin','Muhammod Ali', 'sania'];
let checkTiny = tinyFriend(friends);
console.log(checkTiny);