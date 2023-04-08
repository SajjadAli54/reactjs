/**
 * Types of Exports in React
 * 1. Default Export
 *      - Only one default export per file
 *      - Can be imported with any name
 *      - Can be imported without curly braces
 *      - Can be imported with or without curly braces
 *
 * 2. Named Export
 *      - Can be imported with any name
 *      - Can be imported without curly braces
 *      - Can be imported with curly braces
 *
 * 3. Named Export with Alias
 *      - Can be imported with any name
 *      - Can be imported without curly braces
 *      - Can be imported with curly braces
 *
 * React Props
 * 1. Props are immutable
 * 2. Props are passed from parent to child
 * 3. Props are passed as an object
 * 4. Props are read-only
 * 5. Props are passed as attributes
 * 6. Props are passed as key-value pairs
 * 7. Props are passed as attributes
 */

// Default Export
const PI = 3.14;

export default function Avatar(props) {
  const { url, alt } = props;
  const style = {
    margin: "10px",
  };
  return (
    <>
      <img src={url} alt={alt} style={style} />
    </>
  );
}

// Named Export
export function Avatar2() {
  return (
    <>
      <img
        src="https://picsum.photos/20/30"
        width={20}
        height={20}
        alt="Avatar"
      />
      {/* <p>This is commened p</p> */}
      <p>{PI}</p>
    </>
  );
}
