function progress(){
  let prg = document.getElementById('progress');
  let percent = document.getElementById('percentCount');
  let counter = 5;
  let progress = 25;
  let id = setInterval(frame, 50);
function frame() {
  if(progress == 500 && counter == 100) {
  clearInterval(id);
} else {
progress += 5;
counter += 1;
prg.style.width = progress + 'px';
percent.innerHTML = counter + '%';
}
}
}
progress();
