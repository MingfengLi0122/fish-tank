class Shark extends BiteFish{
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/shark.jpeg'; // Set the image
    this.isTasty = false;
  }
}
