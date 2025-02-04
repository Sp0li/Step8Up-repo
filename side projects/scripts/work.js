console.clear();

function sendFetchRequest() {
    fetch("https://api.github.com/users/Sp0li/repos")
      .then((response) => response.json())
      .then((data) => console.log("Fetch API:", data))
      .catch((error) => console.error("Fetch error:", error));
  }
  
  function sendAxiosRequest() {
    axios
      .get("https://api.github.com/users/Sp0li/repos")
      .then((response) => console.log("Axios:", response.data))
      .catch((error) => console.error("Axios error:", error));
  }
  
  function sendAjaXRequest() {
    $.ajax({
      url: "https://api.github.com/users/Sp0li/repos",
      method: "GET",
      success: function (data) {
        console.log("jQuery.ajax:", data);
      },
      error: function (error) {
        console.error("jQuery error:", error);
      },
    });
  }
  
  function sendXHRRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Sp0li/repos", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("XHR:", xhr.responseText);
      } else {
        console.error("XHR error:", xhr.status);
      }
    };
    xhr.send();
  }
  
  //document.getElementById("fetch").addEventListener("click", sendFetchRequest);
  //document.getElementById("axios").addEventListener("click", sendAxiosRequest);
  //document.getElementById("ajax").addEventListener("click", sendAjaXRequest);
  //document.getElementById("xhr").addEventListener("click", sendXHRRequest);