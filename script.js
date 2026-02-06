const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");

if (yesBtn && noBtn) {
  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Please?",
    "Think again!",
    "Last Chance D:",
    "You're breaking my heart :(",
    "Pretty please :3333",
    "Don't be so cold :((",
    "Give it another thought",
    "PLSSS say yes >:(",
    "I'll agree to CBT atp",
    "CMON I'll cri :'(",
  ];

  let clickCount = 0;

  noBtn.addEventListener("click", () => {
    clickCount += 1;
    const nextText = noTexts[Math.min(clickCount, noTexts.length - 1)];
    noBtn.textContent = nextText;

    const scale = 1 + clickCount * 0.18;
    yesBtn.style.transform = `scale(${scale})`;

    noBtn.classList.remove("shake");
    void noBtn.offsetWidth;
    noBtn.classList.add("shake");
  });
}
