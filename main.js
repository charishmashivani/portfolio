var typed = new Typed(".text", {
    strings: ["Software Developer Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate horizontal bars
    document.querySelectorAll('.skill-bar .progress').forEach(bar => {
        const percentage = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = percentage;
        }, 100);
    });

    // Animate radial bars
    document.querySelectorAll('.radial-bar').forEach(radialBar => {
        const progress = radialBar.getAttribute('data-progress');
        const circle = radialBar.querySelector('.progress-circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    });
});
