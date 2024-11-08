interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`Simple command: Do sth, like: ${this.payload}`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  execute(): void {
    console.log("ComplexCommand: Doing some complex tasks");
    this.receiver.taskA(this.a);
    this.receiver.taskB(this.b);
  }
}

class Receiver {
  public taskA(str: string) {
    console.log(`Receiver: Done task A on ${str}`);
  }

  public taskB(str: string) {
    console.log(`Receiver: Done task B on ${str}`);
  }
}

class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  public setOnStart(onStart: Command) {
    this.onStart = onStart;
  }

  public setOnFinish(onFinish: Command) {
    this.onFinish = onFinish;
  }

  public doImportantThings() {
    console.log("Invoker: do sth before start...");

    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ... doing some tasks ...");

    console.log("Invoker: does sth before finish...");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Adding user"));
const receiver = new Receiver();

invoker.setOnFinish(
  new ComplexCommand(
    receiver,
    "Do user data analytics",
    "Compare to other users"
  )
);

invoker.doImportantThings();
