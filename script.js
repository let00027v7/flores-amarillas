const galaxy =
    document.getElementById("galaxy");

const stars =
    document.getElementById("stars");

const scene =
    document.getElementById("scene");


/* =========================
   ESTRELLAS
========================= */

for (let i = 0; i < 250; i++) {

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    stars.appendChild(star);
}


/* =========================
   FLORES
========================= */

const cantidadFlores = 180;


for (
    let i = 0;
    i < cantidadFlores;
    i++
) {

    const flower =
        document.createElement("div");

    flower.className = "flower";


    /*
       Ángulo
    */

    const angle =
        Math.random() *
        Math.PI *
        2;


    /*
       Distancia desde
       el centro
    */

    const distance =
        60 +
        Math.random() *
        400;


    /*
       Posición
    */

    const x =
        Math.cos(angle) *
        distance;

    const y =
        Math.sin(angle) *
        distance *
        0.55;


    /*
       Tamaño
    */

    const size =
        20 +
        Math.random() *
        25;


    /*
       Guardamos valores
    */

    flower.style.setProperty(
        "--x",
        x + "px"
    );

    flower.style.setProperty(
        "--y",
        y + "px"
    );

    flower.style.setProperty(
        "--size",
        size + "px"
    );

    flower.style.setProperty(
        "--rotation",
        Math.random() * 360 + "deg"
    );


    /*
       Creamos pétalos
    */

    flower.innerHTML = `

        <div class="petal petal1"></div>

        <div class="petal petal2"></div>

        <div class="petal petal3"></div>

        <div class="petal petal4"></div>

        <div class="petal petal5"></div>

        <div class="petal petal6"></div>

        <div class="flowerCenter"></div>

    `;


    galaxy.appendChild(
        flower
    );
}


/* =========================
   ROTACIÓN
========================= */

let rotation = 0;

let targetRotation = 0;

let dragging = false;

let lastX = 0;


scene.addEventListener(
    "pointerdown",
    function(event) {

        dragging = true;

        lastX =
            event.clientX;
    }
);


scene.addEventListener(
    "pointermove",
    function(event) {

        if (!dragging)
            return;


        const movimiento =
            event.clientX -
            lastX;


        targetRotation +=
            movimiento *
            0.5;


        lastX =
            event.clientX;
    }
);


scene.addEventListener(
    "pointerup",
    function() {

        dragging = false;
    }
);


scene.addEventListener(
    "pointercancel",
    function() {

        dragging = false;
    }
);


/* =========================
   ANIMACIÓN
========================= */

function animar() {

    /*
       Giro automático
    */

    if (!dragging) {

        targetRotation +=
            0.08;
    }


    /*
       Movimiento suave
    */

    rotation +=
        (
            targetRotation -
            rotation
        ) * 0.08;


    /*
       Girar galaxia
    */

    galaxy.style.transform =
        `rotate(${rotation}deg)`;


    requestAnimationFrame(
        animar
    );
}


animar();