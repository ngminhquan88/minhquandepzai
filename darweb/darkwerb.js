var job =[];

function add_job(){
    var newWork = document.getElementById("job_get").value;

    job.push(newWork);
    
    upload();
    document.getElementById("newwork").value="";
}
function upload(){
    var index = document.getElementById("list_work");
    index.innerHTML="";

    for(var i=0;i<job.length;i++){
        index.innerHTML +='<li>' + job[i] + '</li>' ;
    }
}
function remove(){ 
    job.pop()
    upload()
}
 

/*Test function*/

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
  