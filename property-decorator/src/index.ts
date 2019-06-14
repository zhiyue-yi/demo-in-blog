class Person {
  @wear('Jacket')
  public wearing: string; // What is the person wearing

  /**
   * Ask what the person is wearing, and you will get answered
   */
  public askWearing() {
    if (this.wearing) {
      console.log(`I am wearing a ${this.wearing}`);
    } else {
      console.log(`I am wearing nothing`);
    }
  }
}

function wear(wearing: string) {
  return function(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: function() {
        return wearing;
      }
    });
  };
}

const zhiyue = new Person();

zhiyue.askWearing();
