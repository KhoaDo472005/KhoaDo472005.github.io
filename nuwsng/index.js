<!DOCTYPE html>
<html>
<head>
  <title>I love you</title>
  <meta property="og:title" content="abcxyz">
  <link rel="icon" href="icon.png" type="image/x-icon">
  <style>
        body {
        zoom: 1;
        -moz-transform: scale(1);
        -moz-transform-origin: 0 0;
    }
    html, body, canvas {
      margin: 0;
      padding: 0;
      display: block;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas"></canvas>
  <script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    document.addEventListener("keydown", function(event) {
      if (event.ctrlKey && event.key === '+') event.preventDefault();
    });

    function draw() {
      var x = Math.floor(Math.random()*(canvas.width + 1));
      var y = Math.floor(Math.random()*(canvas.height + 100));
      var length = (canvas.width>canvas.height) ? canvas.height : canvas.width;
      var fontsize = Math.floor(Math.random()*(30*length/100 + 1) + 10*length/100);
      ctx.font = fontsize + "px Arial";
      var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      ctx.fillStyle = randomColor;
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 10;
      ctx.fillText("Nuwsnggg", x, y);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    setInterval(draw, 100);
  </script>
</body>
</html>
