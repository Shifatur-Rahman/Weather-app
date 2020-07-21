async function getCity() {
  const res = await fetch("https://ipapi.co/json");
  const newRes = await res.json();
  return newRes;
}

getCity().then((data) => {
  var location = document.querySelector(".location");
  location.textContent = data.city;
});
