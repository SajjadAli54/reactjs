import { Table } from "./table";

export default function UseTable() {
  let columns = ["First Name", "Last Name", "Age"];
  let data = [
    ["Maurise", "Hartigan", 25],
    ["Lorain", "Bartosch", 26],
    ["Lorain", "Bartosch", 28],
    ["Sajjad", "Ali", 22],
    ["Abdul", "Rahman", 23],
    ["Amir", "Khan", 24],
    ["Sharukh", "Khan", 25],
    ["Salman", "Khan", 26],
    ["Aamir", "Khan", 27],
    ["Ranbir", "Kapoor", 28],
    ["Ranveer", "Singh", 29],
    ["Ranbir", "Kapoor", 30],
    ["Aishwarya", "Rai", 31],
    ["Deepika", "Padukone", 32],
    ["Priyanka", "Chopra", 33],
    ["Katrina", "Kaif", 34],
    ["Anushka", "Sharma", 35],
  ];

  return <Table columns={columns} data={data} />;
}
