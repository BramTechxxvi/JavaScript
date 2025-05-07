const AirConditioner = require("../AirConditioner");

describe("AirConditioner", ()=> {
    let mySwitch;
    beforeEach(()=> {
        mySwitch = new AirConditioner();
    })  

describe("On/Off function", ()=> {

    test ("test On button", ()=> {
    expect(mySwitch.switchOnAc()).toBe(true);    
    });
    test ("test Off button", ()=> {
    expect(mySwitch.switchOffAc()).toBe(false)
    })
})

describe("Increase temperature function", ()=>{

    test ("test if function can increase temperature when off and return zero", ()=> {
        mySwitch.switchOffAc();
    expect(mySwitch.increaseTemperature()).toBe(0)
    })
    test ("Test increase temperature", ()=> {
        mySwitch.switchOnAc();
        mySwitch.increaseTemperature();
    expect(mySwitch.increaseTemperature()).toBe(18)
    })
    test ("test if temperature can increase over 30", ()=> {
        mySwitch.switchOnAc();
        for (let count = 0; count < 40; count++) mySwitch.increaseTemperature();
        expect(mySwitch.getTemperature()).toEqual(30)
    })
})

describe("test decrease Tempearture", ()=> {

    test("test if function can decrease temperature when off and return zero", ()=> {
        mySwitch.switchOffAc();
    expect(mySwitch.decreaseTemperature()).toBe(0);
    })
    test ("test if temperature can decrease", ()=> {
        mySwitch.switchOnAc();
        for (let count = 0; count < 10; count++) mySwitch.increaseTemperature();
        expect(mySwitch.decreaseTemperature()).toBe(25);
    })
    test ("test if temperature can decrease below 16", ()=> {
        mySwitch.switchOnAc();
        for (let count = 0; count < 20; count++) mySwitch.increaseTemperature();
        expect(mySwitch.getTemperature()).toBe(30);
        for (let count = 0; count < 20; count++) mySwitch.decreaseTemperature();
        expect(mySwitch.getTemperature()).toBe(16)
    })
    
})
})