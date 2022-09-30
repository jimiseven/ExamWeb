var employee = new Array();
employee.push(["76992490", "Sucre"]);
employee.push(["76992491", "La Paz"]);
employee.push(["76992492", "Beni"]);
employee.push(["76992493", "Oruro"]);
employee.push(["76992499", "Pando"]);
console.log(employee);
function createTable() {
  var tablecontents = "";
  for (var i = 0; i < employee.length; i++) {
    tablecontents += "<tr>";
    for (var j = 0; j < employee[i].length; j++) {
      tablecontents += "<td>" + employee[i][j] + "</td>";
    }
    tablecontents += "</tr>";
  } 
  document.getElementById("mytablecontent").innerHTML += tablecontents;
}
createTable();
console.log(employee);

function addData(){
    const name = document.getElementById("nameControl").value
    const email = document.getElementById("emailControl").value
    console.log(name, email)
    employee.push([name, email]);
    document.getElementById("mytablecontent").innerHTML = "";
    createTable();
}
