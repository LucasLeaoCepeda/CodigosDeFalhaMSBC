const uploadconfirm = document.getElementById('uploadconfirm').addEventListener('click', () => {
    var searchingfor = document.getElementById("searchbar").value;
    const IDr = [];
    const Descricaor = [];
    const Resolucaor = [];
    const responseData = [];
    Papa.parse(document.getElementById('uploadfile').files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        function search() {


        }
        console.log(searchingfor);

        //console.log(results);
        console.log(results.data[0].Descricao);

        for (i = 0; i < results.data.length; i++) {
          responseData.push(results.data[i]);

        }
        console.log(responseData);

        console.log(responseData);
        for (j = 0; j < responseData.length; j++) {
          if (responseData[j].ID === searchingfor) {
            console.log("found!");
            IDr.push(responseData[j].ID);
            Descricaor.push(responseData[j].Descricao);
            Resolucaor.push(responseData[j].Resolucao);

          }
          else {
            console.log("not_found ");
          }

        }
        console.log([IDr, Descricaor, Resolucaor]);

        document.getElementById('texto_descricao').innerHTML = Descricaor;
        document.getElementById('texto_resolucao').innerHTML = Resolucaor;
      }
    });
  });
