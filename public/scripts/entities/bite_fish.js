class BiteFish extends GoFish{
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
    this.isTasty = true;
  }

  updateOneTick() {
    super.updateOneTick();
    let proximates = this.tank.getProximateDenizens(this.position, this.height * 0.5);
    let fishes = proximates.filter(tastyFish => tastyFish.isTasty);
    for (let tastyFish of fishes) {
      this.eaten++;
      tastyFish.kill();
    }
  }
}
