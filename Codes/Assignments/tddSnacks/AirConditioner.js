class AirConditioner {
    
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

switchOnAc () {
    if (!this.isOn) {
    this.isOn = true;
    return true
} return false;
}

switchOffAc () { 
    this.isOn = false;
    this.temperature = 0
    return false;
}

increaseTemperature () {
    if (this.isOn) {
    this.temperature++;
    if (this.temperature >=30) this.temperature = 30;
    } return this.temperature
}

decreaseTemperature () {
    if (this.isOn) {
    this.temperature--;
    if (this.temperature <= 16) this.temperature = 16;
    } return this.temperature
}

getTemperature = function() {return this.temperature;}}
module.exports = AirConditioner;