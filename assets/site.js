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
      toggle.setAttribute("aria-expanded", String(isExpanded));
      toggle.setAttribute("aria-label", `${isExpanded ? "Collapse" : "Expand"} ${toggle.dataset.projectToggle}`);
    });
  });
})();
