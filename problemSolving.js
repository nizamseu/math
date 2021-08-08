const fname = ['ulakfd','fhsj','anis','nizam','kamall','aman','jamall','aman','nizamm'];

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

console.log(perfectFriend(fname));

function deliveryCost(item){
    const for_100=100;
    const for_200=80;
    const forMoreThan_200=50;
    if(item>200){
        const till_100 = 100*for_100;
        const moreThan_100 = 80*for_200;
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
        const total = 100*for_100;
        return total ;
    }
}

console.log(deliveryCost(100));