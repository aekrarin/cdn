<script>
    var data;
     $(document).ready(function(){
      setFooter()
        Swal.fire({
          position: 'top',
          icon: 'info',
          title: 'Loading..',
          showConfirmButton: false,
        })   
        Swal.showLoading()
        google.script.run.withSuccessHandler(function(datax){ 
            data = datax  
            Swal.close()          
        }).getDataSheet()
       // $("#idcard").on("keyup" ,search)
      })
      
  function search(){
      event.preventDefault()
      var id = $("#idcard").val()
      var error = $("#errorMessage")
      var dataArray =  data.filter(f=> f[0] == id)

      if(dataArray != ""){
      var result = "<div>"+
                   "<table>"+
                   "<thead class='bg-warning'>"+
                     "<tr>"+                          
                      "<th scope='col'>Id</th>"+
                      "<th scope='col'>Position</th>"+
                      "<th scope='col'>Department</th>"+
                      "<th scope='col'>FirstName</th>"+
                      "<th scope='col'>LastName</th>"+
                      "<th scope='col'>Note</th>"+
                    "</tr>"+
                  "</thead>";
      for(var i=0; i<dataArray.length; i++) {
          result += "<tr>";

          for(var j=0; j<dataArray[i].length; j++){
              result += "<td>"+dataArray[i][j]+"</td>";
          }
          result += "</tr>";
      }
      result += "</table></div>";
      $('#table').html(result)
      error.text("")
      $('#ptable').show()
      $("#idcard").val("")
    }else{
      error.text("Data not found!");
      $('#ptable').hide()
           }
          }
  </script>
