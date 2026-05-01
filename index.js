// Pause/resume skill scrolling when clicking a skill box
document.querySelectorAll(".hard").forEach((container) => {
  const boxes = container.querySelectorAll(".box1");
  let isPaused = false;

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      container.style.animationPlayState = isPaused ? "running" : "paused";
      isPaused = !isPaused;
    });
  });
});

// Send message via Telegram
const TELEGRAM_USERNAME = "Lita_Sok";

const sendTelegramButton =
  document.querySelector("#send-telegram") ||
  document.querySelector("#contact .input button");

if (sendTelegramButton) {
  sendTelegramButton.addEventListener("click", () => {
    const nameValue = (document.querySelector("#contact-name")?.value || "").trim();
    const emailValue = (document.querySelector("#contact-email")?.value || "").trim();
    const messageEl = document.querySelector("#message");
    const messageValue = ((messageEl && "value" in messageEl ? messageEl.value : "") || "").trim();

    if (!messageValue) {
      messageEl?.focus?.();
      return;
    }

    const lines = [
      "Hello,",
      "",
      messageValue,
      "",
      nameValue ? `Name: ${nameValue}` : null,
      emailValue ? `Email: ${emailValue}` : null,
    ].filter(Boolean);

    const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  });
}

