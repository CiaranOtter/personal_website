<script>

const strings = {
    'E2': 82.41,
    'A2': 110.00,
    'D3': 146.83,
    'G3': 196.00,
    'B3': 246.94,
    'E4': 329.63
  };

function playString(note, freq) {
    console.log(note, freq)
}
</script>

<div class="guitar-container relative w-full max-w-2xl mx-auto p-4">
    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 32 32" xml:space="preserve">
<style type="text/css">
   .st0{fill:var(--tertiary);stroke:var(--tertiary);stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
   .st1{fill:none;stroke:var(--primary);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
   
</style>
<g class="group" transform="translate(5 18) rotate(-45 0 0)">
    <path class="base body" d="M20.4,24.8l1.5-3.9c0.4-1.1,1.3-2.1,2.4-2.7l0,0c3.2-1.7,3.7-6.1,1-8.8l-2.3-2.3c-2.7-2.7-7.1-2.2-8.8,1l0,0
    c-0.6,1.1-1.5,1.9-2.7,2.4l-3.9,1.5c-4.6,1.8-5.6,7.8-2,11.4L9,26.8C12.7,30.4,18.6,29.4,20.4,24.8z"/>
    <circle class="base hole" cx="18.2" cy="14.3" r="2.9"/>
    <line class="base bottom hole" x1="9.7" y1="19.1" x2="13.4" y2="22.8"/>
    <!-- <polyline class="base bottom hole" points="26.3,3.5 22.9,6.9 25.6,9.6 29,6.2 "/> -->
    <rect class="base neck" rx=0.2 x=0 y=0 width=4.4 height=10  transform ="rotate(45 1.7 5) translate(17.8 -17.3)  " />
</g>
</svg>
  
  <div class="text-center mt-4">
    <p class="text-sm text-gray-600">Click or touch the strings to play</p>
  </div>
</div>

<style>

    .base {
        stroke-width:0.1;
        stroke-linejoin:round;
        stroke-miterlimit:10;
        /* transform: translate(-1vw); */
    }

    .body {
        fill:none;
        stroke:var(--tertiary);
    }

    .hole {
        fill:none;
        stroke:var(--tertiary);
    }

    .neck {
        stroke: var(--tertiary);
        fill: var(--tertiary);
        /* fill: var(--para_5); */
        stroke-linecap:round;
    }

    .bottom {
        stroke-width: 1;
        stroke-linecap: round;
        stroke: var(--tertiary)
    }

    .guitar-container {
      user-select: none;
      -webkit-user-select: none;
      background: var(--white);
      height: 100vh;
      width:100vw;
    }
    
    /* Add string hover effect */
    line:hover {
      stroke-width: 2;
      /* stroke: #fff; */
    }

    line {
        z-index: 1000;
    }

    .group {
        height: 100vh;
    }

    svg {
        height: 100%;
        
    }

</style>