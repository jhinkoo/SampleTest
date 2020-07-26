function ConvertNow(){

        String[] authors = request.getParameterValues("typeFrom");
        if (authors != null) {
          for (int i = 0; i < authors.length; ++i) {
            alert("You have selected author(s):")
          }
        }
        return false
      }
      function AlertNow(){
            alert("You have selected author(s):")
        return false
      }