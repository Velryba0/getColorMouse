var img = new Image();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

img.onload = function() {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
};
img.crossOrigin = 'Anonymous'
img.src = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9f3f7187088843.5dadc1aa2a1f5.png';
var color = document.getElementById('color');
color.style.position= 'absolute';
color.style.top = '80%'

function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;
    var rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;
    color.style.background = rgba;
    color.textContent = rgba;
    
    console.log(data);
}
canvas.addEventListener('mousemove', pick)

