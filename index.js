var botonswich = document.getElementById("swich")

botonswich.addEventListener("click", () => {
  document.body.classList.toggle('dark');
  botonswich.classList.toggle('active');
});
