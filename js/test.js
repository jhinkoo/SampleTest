
      function AlertNow(){
        var convertAmount = document.getElementById("amount").value;
        var cAmount = /^[1-9]\d*(\.\d+)?$/;
        if (convertAmount.match(cAmount)) {
          const rbFromType = document.querySelectorAll('input[name="fromType"]');
          let selFromType;
          for(const rb of rbFromType){
            if(rb.checked){
              selFromType = rb.value;
              break;
            }
          }

          const rbToType = document.querySelectorAll('input[name="toType"]');
          let selToType;
          for(const rb of rbToType){
            if(rb.checked){
              selToType = rb.value;
              break;
            }
          }
          alert("akk wekk")
          alert(convertAmount + " " + selFromType + " is " + selToType + " " +  "1000")
        }
        else{
          alert("Invalid Amount")
        }
        return false
      }