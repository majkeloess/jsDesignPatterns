class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {}

  public static getInstance(): Singleton {
    if (this.instance == null) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

const sin1 = Singleton.getInstance();
const sin2 = Singleton.getInstance();

console.log(sin1 == sin2);
