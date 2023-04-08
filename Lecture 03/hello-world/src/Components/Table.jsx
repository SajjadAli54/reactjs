export default function Table({ data }) {
  const tableStyle = {
    align: "center",
    border: "2px solid black",
    margin: "10px",
  };
  return (
    <table border={2} style={tableStyle}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
