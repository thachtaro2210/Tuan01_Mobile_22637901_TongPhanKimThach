"use strict";
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now ON ");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air Conditioner is now ON ");
    }
}
