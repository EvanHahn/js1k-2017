#!/usr/bin/env bash
set -e
set -u
set -o pipefail

dest="$(dirname "$0")/../dist/demo.html"
src="$(dirname "$0")/../src/index.js"

echo "<!doctype html>
<html style='margin: 0; padding: 0; border: 0; width: 100%; height: 100%;'>
  <head>
    <meta charset='utf-8'>
  </head>
  <body style='margin: 0; padding: 0; border: 0; width: 100%; height: 100%;'>
    <canvas style='display: block; width: 500px; height: 500px; margin: 0 auto;' width='500' height='500'></canvas>
    <script>
      // shim...
      var a = document.querySelector('canvas');
      var b = document.body;
      var c = a.getContext('2d');
    </script>
    <script>" > "$dest"

cat "$src" >> "$dest"

echo "</script>
</body>
</html>" >> "$dest"
