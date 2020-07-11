void function time() {
  document.body.innerHTML=Date();
  setTimeout(time,1000)
}()