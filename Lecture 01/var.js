/**
 * var is function scoped
 * var is hoisted
 * var can be redeclared
 * var can be updated
 * var is undefined when accessing a variable before it's declared
 * var is undefined when accessing a variable that doesn't exist
 * var can be declared without being initialized
 *
 * var should not be used
 */
function method() {
  console.log(x);
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}

method();
/**
 * Output:
 * undefined
 * 20
 * 20
 */
