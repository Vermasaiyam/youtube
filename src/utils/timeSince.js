export const timeSince = (date)=>{
    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);

    // seconds in year = 31536000
    let interval = second/31536000;

    if (interval > 1){
        return Math.floor(interval) + " Years";
    }
    interval = second/2592000;
    if (interval > 1){
        return Math.floor(interval) + " Months";
    }
    interval = second/86400;
    if (interval > 1){
        return Math.floor(interval) + " Days";
    }
    interval = second/3600;
    if (interval > 1){
        return Math.floor(interval) + " Hours";
    }
    interval = second/60;
    if (interval > 1){
        return Math.floor(interval) + " Minutes";
    }

    return Math.floor(second) + " Seconds";



}