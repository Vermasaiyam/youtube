export const convertRawtoString = (labelValue, isSub= false) => {
    // console.log(labelValue);
    const num = Math.abs(Number(labelValue));

    if (num >= 1.0e9){
        return (num/1.0e9).toFixed(2) + "B";
    }
    if (num >= 1.0e6){
        return (num/1.0e6).toFixed(2) + "M";
    }
    if (num >= 1.0e3){
        return (num/1.0e3).toFixed(2) + "K";
    }
    // console.log((num.toString()));
    return num.toString();
}