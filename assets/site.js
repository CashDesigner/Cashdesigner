(function () {
  const email = atob("bWF0dGJidXJnQG91dGxvb2suY29t");

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = "Email copied";
        button.style.color = "var(--success)";
      } catch (_error) {
        window.location.href = `mailto:${email}`;
      }
      window.setTimeout(() => {
        button.textContent = original;
        button.style.removeProperty("color");
      }, 2200);
    });
  });

  document.querySelectorAll("[data-resume-request]").forEach((link) => {
    const subject = encodeURIComponent("Resume Request - Matthew Brandenburg");
    const body = encodeURIComponent("Hi Matthew,\n\nI visited your engineering portfolio and would like to request a copy of your resume.\n\nThank you,");
    link.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });

  document.querySelectorAll("[data-project-card]").forEach((card) => {
    const toggle = card.querySelector("[data-project-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("is-expanded");
      card.classList.toggle("is-collapsed", !isExpanded);
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.setAttribute("aria-label", `${isExpanded ? "Collapse" : "Expand"} ${toggle.dataset.projectToggle}`);
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-collapsed");
    });
  });

  const expandLinkedProject = () => {
    if (!window.location.hash) return;

    const card = document.querySelector(window.location.hash);
    if (!card || !card.matches("[data-project-card]")) return;

    const toggle = card.querySelector("[data-project-toggle]");
    card.classList.add("is-expanded");
    card.classList.remove("is-collapsed");
    toggle?.setAttribute("aria-expanded", "true");
    toggle?.setAttribute("aria-label", `Collapse ${toggle.dataset.projectToggle}`);
  };

  expandLinkedProject();
  window.addEventListener("hashchange", expandLinkedProject);

  const rolodex = document.querySelector("[data-rolodex]");
  if (rolodex) {
    const cards = [...rolodex.querySelectorAll("[data-rolodex-card]")];
    const previous = document.querySelector("[data-rolodex-previous]");
    const next = document.querySelector("[data-rolodex-next]");
    const count = document.querySelector("[data-rolodex-count]");
    let activeIndex = 0;

    const showCard = (index) => {
      activeIndex = (index + cards.length) % cards.length;
      cards.forEach((card, cardIndex) => {
        const isActive = cardIndex === activeIndex;
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-hidden", String(!isActive));
        card.querySelector("iframe")?.setAttribute("tabindex", isActive ? "0" : "-1");
        card.querySelector("a")?.setAttribute("tabindex", isActive ? "0" : "-1");
      });
      count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    };

    previous?.addEventListener("click", () => showCard(activeIndex - 1));
    next?.addEventListener("click", () => showCard(activeIndex + 1));
    showCard(0);
  }
})();
