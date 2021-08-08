

//4. perfect friend problem
function perfectFriend(friendsName){
    // error cheking 
    if(typeof friendsName == 'string' || typeof friendsName == 'number'){
        return 'Give me only a String Array '
    }

    if(typeof friendsName == 'undefined'){
        return 'check your input value'
    }

    for(const friend of friendsName){
        if(friend.length ==5){
            return friend
            break
        }  
    }
}


// 3. delivery cost problem

function deliveryCost(item){
 // error cheking 
    if(typeof item == 'string' || typeof item == 'undefined' || typeof item == 'object'){
        return 'Give me a valid Number'
    }
// nagative value checking 
    if( item <0){
        return 'Give me positive number'
    }

    // calculating 
    const for_100=100; //taka
    const for_200=80;  //taka
    const forMoreThan_200=50;   //taka

    if(item>200){
        const till_100 = 100*for_100; // for 1-100 item
        const moreThan_100 = 100*for_200; // for 101-200 item
        const restItem =item-200;
        const restAmount =restItem*forMoreThan_200;
        total = till_100 + moreThan_100 + restAmount;
        return total;
    }
    else if(item>100){
        const till_100 = 100*for_100;
        const restItem =item-100;
        const restAmount =restItem*for_200;
        const total = till_100 + restAmount;
        return total;
    }
    else {
        const total = item*for_100;
        return total ;
    }
}

console.log(deliveryCost(1));



// total cost problem 
function totalSales (shirts,pants,shoes){

    // error handleing 
        if((typeof shirts =='string' )|| (typeof pants =='string') || (typeof shoes =='string' )){
            return 'Strins is not Allowed'
        }
        if((typeof shirts =='object' )|| (typeof pants =='object') || (typeof shoes =='object' )){
            return 'Object is not Allowed'
        }
        if((typeof shirts =='undefined' )|| (typeof pants =='undefined') || (typeof shoes =='undefined' )){
            return 'Check Your input number'
        }

// negative value checking 
    if( shirts <0 || pants<0 ||shoes<0){
        return 'Give me positive number'
    }

    const shirtPrice = 100;
    const pantPrice= 200;
    const shoePrice = 500;

    // calculation 

    const totalShirt = shirts*shirtPrice;
    const totalPant = pants*pantPrice;
    const totalShoe = shoes*shoePrice;

    const totalAmount = totalShirt + totalPant + totalShoe;

    return totalAmount;
}

console.log(totalSales(0,0,0));

// seer to mon convertion 
function seerToMon (seer){
    // error handling 
    if(typeof seer == 'string' || typeof seer == 'undefined' || typeof seer == 'object'){
        return 'Give me a valid Number'
    }

    // nagative value cheking 
    if( seer <0){
        return 'Give me positive number'
    }

    const mon =seer/40;
    // const monWithoutfrac =Math.floor(mon)
    return  mon
}
console.log(seerToMon(60));