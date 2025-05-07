const findClasses = (timings)=> {
    const newArray = []
    timings.filter((time)=> {
    for (let idx= 0; idx < time.length; idx++) {
        if (time[idx] === "P" && "M") newArray.push(time);
    }
    }); return newArray
}
module.exports = findClasses;