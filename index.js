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

// Workshop cards: show details on image when clicked
document.querySelectorAll("#habit .part1").forEach((card) => {
  const img = card.querySelector("img");
  const title = card.querySelector("h2");
  if (!img || !title) return;

  // Ensure we have a single hidden-content container for all text details
  let hiddenContent = card.querySelector(".hidden-content");
  if (!hiddenContent) {
    hiddenContent = document.createElement("div");
    hiddenContent.className = "hidden-content";

    // Move all elements between title and image into hiddenContent
    let node = title.nextSibling;
    while (node && node !== img) {
      const next = node.nextSibling;
      if (node.nodeType === Node.ELEMENT_NODE) hiddenContent.appendChild(node);
      node = next;
    }

    card.insertBefore(hiddenContent, img);
  }

  // Wrap image + hidden content into a media container (so overlay sits on image)
  let media = card.querySelector(".workshop-media");
  if (!media) {
    media = document.createElement("div");
    media.className = "workshop-media";
    card.insertBefore(media, img);
    media.appendChild(hiddenContent);
    media.appendChild(img);
  }

  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", card.classList.contains("is-open") ? "true" : "false");

  const toggle = () => {
    const willOpen = !card.classList.contains("is-open");
    document.querySelectorAll("#habit .part1.is-open").forEach((openCard) => {
      if (openCard !== card) {
        openCard.classList.remove("is-open");
        openCard.setAttribute("aria-expanded", "false");
      }
    });
    card.classList.toggle("is-open", willOpen);
    card.setAttribute("aria-expanded", willOpen ? "true" : "false");
  };

  card.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.closest && target.closest("a, button, input, textarea, select")) return;
    toggle();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
});
