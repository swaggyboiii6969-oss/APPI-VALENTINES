const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");

if (yesBtn && noBtn) {
  const noTexts = [
    "No",
    "Are you sure?",
    "Please?",
    "Think again?",
    "You're breaking my heart",
    "Pretty please",
    "Just say yes",
    "I'll bring snacks",
    "I'll be your bunny",
    "Please say yes",
  ];

  let clickCount = 0;

  noBtn.addEventListener("click", () => {
    clickCount += 1;
    const nextText = noTexts[Math.min(clickCount, noTexts.length - 1)];
    noBtn.textContent = nextText;

    const scale = 1 + clickCount * 0.18;
    yesBtn.style.transform = `scale(${scale})`;

    const noOpacity = Math.max(0, 1 - clickCount * 0.18);
    noBtn.style.opacity = String(noOpacity);
    noBtn.style.transform = `scale(${Math.max(0.7, 1 - clickCount * 0.08)})`;
    if (noOpacity <= 0.1) {
      noBtn.style.pointerEvents = "none";
    }

    noBtn.classList.remove("shake");
    void noBtn.offsetWidth;
    noBtn.classList.add("shake");
  });
}
