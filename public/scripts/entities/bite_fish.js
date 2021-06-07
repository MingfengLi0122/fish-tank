class BiteFish extends GoFish{
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
    this.isTasty = false;
  }

  eat() {
    let proxPos = this.tank.getProximateDenizen(this.position, this.height * 0.6);
    let nearFish = proxPos.filter(fish => fish.isTasty);
    for (let fish of nearFish) {
      fish.kill();
    }
  }
}
