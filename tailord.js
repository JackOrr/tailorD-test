function test() {
  var hid = document.getElementById("Height").value;
  var wid = document.getElementById("Weight").value;
  var fid = document.getElementById("Fit").value;
  var mid = document.getElementById("Male").value;
  var feid = document.getElementById("Female").value;
  var aid = document.getElementById("Age").value;

  var height = localStorage.getItem("Height", hid);
  var weight = localStorage.getItem("Weight", wid);
  var fit = localStorage.getItem("Fit", fid);
  var male = localStorage.getItem("Male", mid);
  var female = localStorage.getItem("Female", feid);
  var age = localStorage.getItem("Age", aid);
}
