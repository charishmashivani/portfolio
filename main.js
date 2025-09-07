
  const words = ["Software Developer", "Problem Solver", "Tech Enthusiast"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
      }

      typingElement.textContent = currentWord;

      if (!isDeleting && j === words[i].length) {
        isDeleting = true;
        setTimeout(type, 1200); // pause before deleting
        return;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) i = 0;
      }
    }
    setTimeout(type, isDeleting ? 80 : 150);
  }

  document.addEventListener("DOMContentLoaded", type);

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
