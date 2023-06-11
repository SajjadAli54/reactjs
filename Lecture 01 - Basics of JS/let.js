/**
 * let is block scoped
 * let is not hoisted
 * let can not be redeclared
 * let can be updated
 * let can be declared without initialization
 * let can be declared in a block without affecting the outer scope
 *
 */
function method() {
  //   console.log(x); // ReferenceError: x is not defined
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

method();
/**
 * Output:
 * 20
 * 10
 */
