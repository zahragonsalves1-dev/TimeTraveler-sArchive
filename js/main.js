// ==========================================================================
// Mobile navigation toggle
// ==========================================================================
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    });
  });
})();

// ==========================================================================
// Helpers
// ==========================================================================
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Give each category a consistent color from the palette, so the same
// topic always reads the same way across the site. Falls back by
// rotating through the palette for any category not listed here.
const CATEGORY_PALETTE = ["sage", "gold", "terracotta", "rose", "teal"];
const CATEGORY_COLOR_MAP = {
  "Library Science": "teal",
  "Archives": "terracotta",
  "Museums": "rose",
  "Islamic Heritage": "gold",
  "Historical Research": "terracotta",
  "Digital Humanities": "teal",
  "Literacy & Education": "sage",
  "Student Involvement": "gold"
};
function colorForCategory(category) {
  if (CATEGORY_COLOR_MAP[category]) return CATEGORY_COLOR_MAP[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
}

function cardTemplate(item, opts) {
  const color = colorForCategory(item.category);
  const rightMeta = opts.footerRight(item);
  return (
    '<a class="catalog-card catalog-card--' + color + '" href="' + escapeHTML(item.href) + '">' +
      '<div class="catalog-card__meta"><span class="catalog-card__id">' + escapeHTML(item.id) + '</span><span>' + escapeHTML(item.date) + '</span></div>' +
      '<h3 class="catalog-card__title">' + escapeHTML(item.title) + '</h3>' +
      '<p class="catalog-card__desc">' + escapeHTML(item.description) + '</p>' +
      '<div class="catalog-card__footer"><span class="tag tag--' + color + '">' + escapeHTML(item.category) + '</span><span>' + escapeHTML(rightMeta) + '</span></div>' +
    '</a>'
  );
}

// ==========================================================================
// Writing index (writing.html)
// ==========================================================================
function renderArticles(list) {
  const container = document.getElementById("article-grid");
  if (!container) return;

  if (!list.length) {
    container.innerHTML = '<div class="empty-state">No entries in this category yet — check back soon.</div>';
    return;
  }

  container.innerHTML = list
    .slice()
    .sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))
    .map((a) => cardTemplate(a, { footerRight: (x) => x.readTime }))
    .join("");
}

function initWritingPage() {
  const grid = document.getElementById("article-grid");
  if (!grid || typeof ARTICLES === "undefined") return;

  renderArticles(ARTICLES);

  const filterBar = document.getElementById("writing-filters");
  if (!filterBar) return;

  const categories = ["All"].concat(
    Array.from(new Set(ARTICLES.map((a) => a.category)))
  );

  filterBar.innerHTML = categories
    .map(function (cat, i) {
      return (
        '<button class="filter-btn" data-cat="' + escapeHTML(cat) + '" aria-pressed="' +
        (i === 0 ? "true" : "false") + '">' + escapeHTML(cat) + "</button>"
      );
    })
    .join("");

  filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const cat = btn.dataset.cat;
      renderArticles(cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat));
    });
  });
}

// ==========================================================================
// Projects index (projects.html)
// ==========================================================================
function renderProjects(list) {
  const container = document.getElementById("project-grid");
  if (!container) return;

  if (!list.length) {
    container.innerHTML = '<div class="empty-state">No entries in this category yet — check back soon.</div>';
    return;
  }

  container.innerHTML = list
    .slice()
    .sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))
    .map((p) => cardTemplate(p, { footerRight: (x) => x.role }))
    .join("");
}

function initProjectsPage() {
  const grid = document.getElementById("project-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  renderProjects(PROJECTS);

  const filterBar = document.getElementById("project-filters");
  if (!filterBar) return;

  const categories = ["All"].concat(
    Array.from(new Set(PROJECTS.map((p) => p.category)))
  );

  filterBar.innerHTML = categories
    .map(function (cat, i) {
      return (
        '<button class="filter-btn" data-cat="' + escapeHTML(cat) + '" aria-pressed="' +
        (i === 0 ? "true" : "false") + '">' + escapeHTML(cat) + "</button>"
      );
    })
    .join("");

  filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const cat = btn.dataset.cat;
      renderProjects(cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat));
    });
  });
}

// ==========================================================================
// Homepage — featured writing + recent projects
// ==========================================================================
function initHomePage() {
  const featured = document.getElementById("home-featured-articles");
  if (featured && typeof ARTICLES !== "undefined") {
    const items = ARTICLES.slice().sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1)).slice(0, 3);
    featured.innerHTML = items.map((a) => cardTemplate(a, { footerRight: (x) => x.readTime })).join("");
  }
}

function initHomeProjects() {
  const container = document.getElementById("home-recent-projects");
  if (!container || typeof PROJECTS === "undefined") return;
  const items = PROJECTS.slice().sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1)).slice(0, 2);
  container.innerHTML = items.map((p) => cardTemplate(p, { footerRight: (x) => x.role })).join("");
}

// ==========================================================================
// Experience timeline (experience.html)
// ==========================================================================
function initExperiencePage() {
  const container = document.getElementById("timeline");
  if (!container || typeof EXPERIENCE === "undefined") return;

  container.innerHTML = EXPERIENCE
    .slice()
    .sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))
    .map(function (e) {
      return (
        '<div class="timeline-entry">' +
          '<div class="timeline-entry__date">' + escapeHTML(e.date) + '</div>' +
          '<div>' +
            '<h3 class="timeline-entry__role">' + escapeHTML(e.role) + '</h3>' +
            '<div class="timeline-entry__org">' + escapeHTML(e.org) + '</div>' +
            '<p class="timeline-entry__desc">' + escapeHTML(e.description) + '</p>' +
          '</div>' +
        '</div>'
      );
    })
    .join("");
}

// ==========================================================================
// Reading page (reading.html)
// ==========================================================================
function initReadingPage() {
  const container = document.getElementById("book-grid");
  if (!container || typeof BOOKS === "undefined") return;

  container.innerHTML = BOOKS
    .map(function (b) {
      return (
        '<div class="book-card">' +
          '<div class="book-spine">' + escapeHTML(b.tag) + '</div>' +
          '<div class="book-title">' + escapeHTML(b.title) + '</div>' +
          '<div class="book-author">' + escapeHTML(b.author) + '</div>' +
          '<p style="margin:0;color:var(--color-ink-soft);font-size:0.85rem;">' + escapeHTML(b.note) + '</p>' +
        '</div>'
      );
    })
    .join("");
}

// ==========================================================================
// Scroll reveal — subtle fade + rise as sections and cards enter view.
// Runs after the data-driven sections above have rendered their content,
// so freshly-injected cards get tagged too.
// ==========================================================================
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;

  const groupSelectors = [
    ".catalog-grid",
    ".interest-list",
    ".exploring",
    ".timeline",
    ".book-grid",
    ".contact-list"
  ];

  groupSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (group) {
      Array.from(group.children).forEach(function (child, i) {
        child.classList.add("reveal");
        child.style.setProperty("--reveal-delay", Math.min(i, 5) * 70 + "ms");
      });
    });
  });

  document.querySelectorAll(".section-head, .page-head > *, .cv-panel").forEach(function (el) {
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initHomePage();
  initHomeProjects();
  initWritingPage();
  initProjectsPage();
  initExperiencePage();
  initReadingPage();
  initScrollReveal();
});
