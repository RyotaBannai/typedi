import "reflect-metadata";
import { Container, Service } from "typedi";

@Service()
class MyClass {
  myMethod() {
    console.log("MyMethods has been called.");
  }
}

let c = Container.get(MyClass);
c.myMethod();
