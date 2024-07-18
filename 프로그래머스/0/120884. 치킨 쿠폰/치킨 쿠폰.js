function solution(chicken) {
    let service = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        let addService = Math.floor(coupon / 10);
        service += addService;
        coupon = Math.floor(coupon % 10) + addService;
    }
    return service
}