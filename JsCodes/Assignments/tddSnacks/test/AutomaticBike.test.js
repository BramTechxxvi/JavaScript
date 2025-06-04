const AutomaticBike = require("../AutomaticBike")

describe("AutomaticBike", ()=> {
    let myControl;
    beforeEach(()=> {
        myControl = new AutomaticBike();
    }) 

describe("ON/OFF control", ()=> {

    test ("test on function", ()=> {
    expect(myControl.switchOnBike()).toBe(true)
    })
    test ("test off function", ()=> {
    expect(myControl.switchOffBike()).toBe(false)
    })
})

describe("Accelerate Bike Function", ()=> {

    test ("test if bike an accelerate when off", ()=> {
        myControl.switchOffBike()
        myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(0);
    })
    test ("test if bike can accelerate when not in gear", ()=> {
        myControl.switchOnBike();
        for(let count =0 ; count < 20; count++) myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(0);
    })
    test ("test if bike can accelerate in gear one", ()=> {
        myControl.switchOnBike();
        myControl.setGear(1);
        for(let count =0 ; count < 20; count++) myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(20)
    })
    test("test if bike can accelerate in gears two", ()=> {
        myControl.switchOnBike();
        myControl.setGear(2);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(20);

    })
    test("test if bike can acelerate in gear three", ()=> {
        myControl.switchOnBike();
        myControl.setGear(3);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(30);
    })
    test("test if bike can acelerate in gear four", ()=> {
        myControl.switchOnBike();
        myControl.setGear(4);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        expect(myControl.getSpeed()).toBe(40);
    })
})

describe("Decelerate Bike Function", ()=> {

    test ("test if bike an decelerate when off", ()=> {
        myControl.switchOffBike()
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(0);
    })
    test ("test if bike can decelerate when not in gear", ()=> {
        myControl.switchOnBike();
        for(let count =0 ; count < 20; count++) myControl.accelerateBike();
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(0);
    })
    test ("test if bike can decelerate in gear one", ()=> {
        myControl.switchOnBike();
        myControl.setGear(1);
        for(let count =0 ; count < 20; count++) myControl.accelerateBike();
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(19)
    })
    test("test if bike can decelerate in gears two", ()=> {
        myControl.switchOnBike();
        myControl.setGear(2);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(18);

    })
    test("test if bike can decelerate in gear three", ()=> {
        myControl.switchOnBike();
        myControl.setGear(3);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(27);
    })
    test("test if bike can decelerate in gear four", ()=> {
        myControl.switchOnBike();
        myControl.setGear(4);
        for(let count =0 ; count < 10; count++) myControl.accelerateBike();
        myControl.decelerateBike();
        expect(myControl.getSpeed()).toBe(36);
    })
})

})