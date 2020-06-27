import "reflect-metadata";
import { Container, Service, Inject } from "typedi";

@Service()
class MyClass {
  constructor(props: any) {
    console.log("MyClass initiated.");
  }
  myMethod() {
    console.log("MyMethods has been called.");
  }
}

// let c = Container.get(MyClass);
// c.myMethod();

@Service()
class MainClass {
  // constructor(props: any) {
  constructor(private myClass: MyClass) {
    console.log("MainClass initiated.");
  }
  // @Inject()
  // myClass: MyClass; // or you can pass this in the constructor like above
}

let m = Container.get(MainClass);
