function isValidCoupon( couponCode, totalAmount){
    couponCode = prompt('enter an code')

    totalAmount = Number(prompt('enter your total amount'))

    if( couponCode === 'SALE' === 'BIGSALE' && totalAmount >=50 ){
        return true
    }

    else if ( couponCode === 'LILSALE' && totalAmount < 50){
        return false
    }
    
    else{
        return 'error'
    }
}

alert(isValidCoupon())