const changeCordinates = (object)=> {
    [object.x, object.y] = [object.y, object.x];
    return object
}
module.exports = changeCordinates;