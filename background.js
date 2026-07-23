const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(80,120,200,0.25)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width)
            p.dx *= -1;

        if (p.y < 0 || p.y > canvas.height)
            p.dy *= -1;
    });

    requestAnimationFrame(animate);
}




// function animate() {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // draw connections
//     for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {

//             let dx = particles[i].x - particles[j].x;
//             let dy = particles[i].y - particles[j].y;

//             let distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < 120) {

//                 ctx.beginPath();
//                 ctx.moveTo(
//                     particles[i].x,
//                     particles[i].y
//                 );

//                 ctx.lineTo(
//                     particles[j].x,
//                     particles[j].y
//                 );

//                 ctx.strokeStyle =
//                     "rgba(80,120,200,0.15)";

//                 ctx.stroke();
//             }
//         }
//     }


//     particles.forEach(p => {

//         ctx.beginPath();
//         ctx.arc(
//             p.x,
//             p.y,
//             p.r,
//             0,
//             Math.PI * 2
//         );

//         ctx.fillStyle =
//             "rgba(100,150,255,0.7)";

//         ctx.fill();


//         p.x += p.dx;
//         p.y += p.dy;


//         if (p.x < 0 || p.x > canvas.width)
//             p.dx *= -1;

//         if (p.y < 0 || p.y > canvas.height)
//             p.dy *= -1;
//     });


//     requestAnimationFrame(animate);
// }





animate();


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
