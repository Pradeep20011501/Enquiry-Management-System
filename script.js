var selectedRow = null

function onformSubmit(){
    var formData = readformData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);

    resetForm();
}

function readformData(){
    var formData = {};
    formData["EmpName"] = document.getElementById("empname").value;
    formData["MobileNumber"] = document.getElementById("num").value;
    formData["EmailId"] = document.getElementById("email").value;
    formData["Branch"] = document.getElementById("branch").value;
    formData["Enquiry"] = document.getElementById("enquiry").value;
    return formData;
}
 function insertNewRecord(data){
    var table = document.getElementById("employeelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.EmpName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.MobileNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.EmailId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Branch;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Enquiry;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
 }

 function resetForm(){
    document.getElementById("empname").value="";
    document.getElementById("num").value="";
    document.getElementById("email").value="";
    document.getElementById("branch").value="";
    document.getElementById("enquiry").value="";
    selectedRow = null;
 }
  function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empname").value= selectedRow.cells[0].innerHTML;
    document.getElementById("num").value=selectedRow.cells[1].innerHTML;
    document.getElementById("email").value=selectedRow.cells[2].innerHTML;
    document.getElementById("branch").value=selectedRow.cells[3].innerHTML;
    document.getElementById("enquiry").value=selectedRow.cells[4].innerHTML;
  }
  function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.EmpName;
    selectedRow.cells[1].innerHTML = formData.MobileNumber;
    selectedRow.cells[2].innerHTML = formData.EmailId;
    selectedRow.cells[3].innerHTML = formData.Branch;
    selectedRow.cells[4].innerHTML = formData.Enquiry;
  }
  function onDelete(td){
    if(confirm("Are u sure to delete this record ?")){
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetForm();
    }

  }