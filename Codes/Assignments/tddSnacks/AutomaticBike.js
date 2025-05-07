class AutomaticBike {

    constructor() {
        this.currentGear = 0;
        this.startBike = false;
        this.accelerate = 0;
    }

switchOnBike() {
    if (!this.startBike) {
    this.startBike = true;
    return true;
    } return false;
}

switchOffBike() {
    this.startBike = false;
    this.accelerate = 0;
    return false;
}

setGear(gear) { if (gear >= 1 || gear <= 4) this.currentGear = gear; }

accelerateBike() {
    if (this.startBike) {
        switch(this.currentGear) {
        case 1: if(this.accelerate <=20 ) this.accelerate++; break;
        case 2: if(this.accelerate <= 30) this.accelerate+=2; break;
        case 3: if(this.accelerate <=40) this.accelerate+=3; break;
        case 4: this.accelerate+=4; break;
        }
    } return this.accelerate;
};

decelerateBike() {
    if (this.startBike) {
        switch(this.currentGear) {
        case 1: if(this.accelerate <=20) this.accelerate--; break;
        case 2: if(this.accelerate <= 30) this.accelerate-=2; break;
        case 3: if(this.accelerate <= 40) this.accelerate-=3; break;
        case 4: this.accelerate-=4; break;
        }
    } return this.accelerate;
}

getSpeed() { return this.accelerate;} }
module.exports = AutomaticBike