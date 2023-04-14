export function Table({ columns, data }) {
  const tableStyle = {
    align: "center",
    border: "2px solid black",
    margin: "10px",
  };
  return (
    <table border={2} style={tableStyle}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
