var i = 0;
var text = `You are invited`
var speed = 150;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("start").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
  }
}

document.getElementById("start").onload = typeWriter()
