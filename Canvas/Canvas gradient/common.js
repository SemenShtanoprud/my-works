var c = document.getElementById("canvas");
var ctx = c.getContext('2d');
var grd = ctx.createLinearGradient (0, 0, 600, 400);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect (0, 0, 600, 280);


