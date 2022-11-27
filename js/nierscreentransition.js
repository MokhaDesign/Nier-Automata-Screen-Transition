// ------------------- Variables
// ------- Ids
// ------- idMainContent = content to show after transition
// ------- classToHide = will hide all those elements at animation start
let idMainContent = 'main';
let classToHide = '.start';

// ------- Namespace, Timeline
const svgNS = "http://www.w3.org/2000/svg";
const timelineLocal = anime.timeline({});

// ------- No touchy
let trianglesShown = 0;
const count = 3;

// ------------------- Triangles Generation Functions
function SetTrianglesRight(i) {
  modoff = (100 / (count * 2) * i) + 16.66 * i;
  t = 16.66 + ((16.66 * 2) * i);

  for (let i = 0; i < count * 2; i++) {
    newpath = document.createElementNS(svgNS, "polygon");
    m = 20 * (i);
    l = 20 + (20 * (i));
    f = 10 + (20 * i);
    newpath.setAttributeNS(null, "points", "" + f + "," + t + " " + m + "," + modoff + " " + l + "," + modoff + "");
    id_t.appendChild(newpath);
  }

}

function SetTrianglesLeft(i) {
  modoff = 16.66 + (100 / (count * 2) * i) + (16.66) * i;
  t = (16.66 * 2) + ((16.66 * 2) * i);

  for (let i = 0; i < count * 2; i++) {
    newpath = document.createElementNS(svgNS, "polygon");
    m = 20 * (i);
    l = 20 + (20 * (i));
    f = 10 + (20 * i);
    newpath.setAttributeNS(null, "points", "" + (f + 10) + "," + t + " " + (m + 10) + "," + modoff + " " + (l + 10) + "," + modoff + "");
    id_t.appendChild(newpath);
  }

    for (let i = 0; i < count; i++) {
      modoff = (100 / (count * 2) * i) + 16.66 * i;
      t = 16.66 + ((16.66 * 2) * i);

      for (let i = 0; i < count * 2; i++) {
        newpath = document.createElementNS(svgNS, "polygon");
        m = 20 * (i);
        l = 20 + (20 * (i));
        f = 10 + (20 * i);
        newpath.setAttributeNS(null, "points", " " + f + "," + t + " " + l + "," + modoff + " " + (f + 20) + "," + t + "");
        id_t.appendChild(newpath);
      }
    }

    for (let i = 0; i < count; i++) {
      modoff = 16.66 + (100 / (count * 2) * i) + 16.66 * i;
      t = (16.66 * 2) + ((16.66 * 2) * i);

      for (let i = 0; i < count * 2; i++) {
        newpath = document.createElementNS(svgNS, "polygon");
        m = 20 * (i);
        l = 20 + (20 * (i));
        f = 10 + (20 * i);
        newpath.setAttributeNS(null, "points", " " + (f + 10) + "," + t + " " + (l + 10) + "," + modoff + " " + (f + 30) + "," + t + "");
        id_t.appendChild(newpath);
      }
    }
}

function SetTrianglesOthers() {

    // Awful but I'm in a rush

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,0 0,17 10,17");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,33 0,17 10,17");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,50 0,33 10,50");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,67 0,33 10,50");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,67 0,83 10,83");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,100 0,83 10,83");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,100 10,83 20,100");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,67 10,50 20,67");
    id_t.appendChild(newpath);

    newpath = document.createElementNS(svgNS, "polygon");
    newpath.setAttributeNS(null, "points", "0,33 10,17 20,33");
    id_t.appendChild(newpath);
}

function SetTriangles(id) {
  id_t = document.getElementById(id);

  for (let i = 0; i < count; i++) {
    SetTrianglesRight(i);
    }
  for (let i = 0; i < count; i++) {
    SetTrianglesLeft(i);
  }

  SetTrianglesOthers();

  // ----- Randomise?
  $(function() {
    var parent = $("#triangles");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });
}

// ------------------- Lines Generation Functions
function SetLines(id, left) {
  id_l = document.getElementById(id);
  isLeft = left;

  if (isLeft) {
    // Do the left ones
    newpath = document.createElementNS(svgNS, "path");
    t = 100 / (count * 2);
    newpath.setAttributeNS(null, "d", "M100," + t + " L0," + t + "");
    id_l.appendChild(newpath);

    for (let i = 0; i < count; i++) {
      newpath = document.createElementNS(svgNS, "path");
      m = (20 * i);
      l = (20 * count) + (20 * i);
      newpath.setAttributeNS(null, "d", "M" + m + ",0 L" + l + ",100");
      id_l.appendChild(newpath);
    }

  } else {
    // Do the right ones
    for (let i = 0; i < count; i++) {
      newpath = document.createElementNS(svgNS, "path")
      l = (20 * i);
      m = (20 * count) + (20 * i);
      newpath.setAttributeNS(null, "d", "M" + m + ",0 L" + l + ",100")
      id_l.appendChild(newpath);
    }
    newpath = document.createElementNS(svgNS, "path");
    t = 100 / count * 2;
    newpath.setAttributeNS(null, "d", "M0," + t + " L100," + t + "");
    id_l.appendChild(newpath);

    // Reverse Children for Animation
    $.fn.reverseChildren = function() {
      return this.each(function() {
        var $this = $(this);
        $this.children().each(function() {
          $this.prepend(this)
        });
      });
    };
    $('#lines-right').reverseChildren();
  }

}

// ------------------- Animate Functions
function ShowContent() {
  setTimeout(() => {
    var main = document.getElementById(idMainContent);
    main.style.display = "flex";
    var svgs = document.getElementById('svg-wrapper');
    svgs.style.display = "none";
    anime({
      targets: '#main',
      opacity: {
        value: ['0', '1'],
        duration: 1500,
        delay: function(el, i) {
          return i * 150
        }}});
  }, 1550);
}

function DissolveTriangles() {
  trianglesShown++;
  if (trianglesShown >= 81) {
  ShowContent();
  }
}

function AnimateTriangles() {
  timelineLocal.add({
    targets: '#triangles > polygon',
    opacity: {
      value: ['0', '1'],
      duration: 350,
      delay: function(el, i) {
        return i * 15
      },
      complete: function(anim) {
        DissolveTriangles();
      }

    }
  });
}

function AnimateLines() {
  document.querySelectorAll('.lines').forEach(function(line) {
    line.style.display = "block";
  });

  anime({
    targets: '#lines-right path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 750,
    delay: function(el, i) {
      return i * 75
    },
    direction: 'alternate',
    loop: false,
    begin: function(anim) {
      document.querySelectorAll(classToHide).forEach(function(start) {
        start.style.display = "none";
      });
    }
  });

  anime({
    targets: '#lines-left path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'linear',
    duration: 500,
    delay: function(el, i) {
      return i * 75
    },
    direction: 'alternate',
    loop: false,
    complete: function() {
      AnimateTriangles();
    }
  });
}

window.onload = function(){
  SetLines('lines-left', true);
  SetLines('lines-right', false);

  SetTriangles('triangles');
};


