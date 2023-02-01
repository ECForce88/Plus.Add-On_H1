function alertTime(event) {
    let cityZone = (event.target.value)
    let today = moment().format("[It is] dddd, MMMM D, yyyy, H:m [in] ");
  
    if (event.target.value.length > 0) {
      alert(`${today} ${cityZone}`);
    }
  }
  
  let selectCity = document.querySelector("#city");
  selectCity.addEventListener("change", alertTime);


    