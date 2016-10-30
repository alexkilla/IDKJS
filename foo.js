import * as b from "./bar";
var hungry = "hippo";

export function awesome() {
  console.log(
    b.hello(hungry).toUpperCase()
  );
}
