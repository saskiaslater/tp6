
window.onload = function() {
  
  document.querySelector("#foodbkgd").classList.add("title");

  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
    
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
    
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }
 
    document.querySelector("#foodbkgd").onclick = function() {
    this.classList.toggle("title")
  }
    
  document.querySelector(".copyright").innerHTML += "<p><strong>This recipe was taken for the purpose of a school project for DTC 477 at Washington State University.<strong></p>";
  
} // end of window.onload