/**
 * =========================================================================
 * APEX CONSTRUCTION & ENGINEERING - MAIN INTERACTIVE CONTROLLER
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Site Configuration Placeholders
  initSiteConfig();

  // 2. Initialize Navigation & Mobile Menu
  initNavigation();

  // 3. Initialize Number Counters
  initCounters();

  // 4. Initialize Interactive Cost Estimator
  initEstimator();

  // 5. Initialize Projects Gallery & Filtering
  initProjectsGallery();

  // 6. Initialize Contact Form & Toast
  initContactForm();

  // 7. Initialize Back to Top & Scroll Observers
  initScrollBehaviors();
});

/**
 * Syncs DOM elements with SITE_CONFIG (from js/config.js) if available.
 * Makes it effortless for the user to update details in one spot!
 */
function initSiteConfig() {
  if (typeof window.SITE_CONFIG === "undefined") return;
  const cfg = window.SITE_CONFIG;

  // Update Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Update Brand Names
  if (cfg.company) {
    const navBrand = document.getElementById("nav-brand-name");
    if (navBrand && cfg.company.shortName) navBrand.textContent = cfg.company.shortName;
    
    const heroDesc = document.getElementById("hero-desc");
    if (heroDesc && cfg.company.subHeadline) heroDesc.textContent = cfg.company.subHeadline;
  }

  // Update Contact Info Links
  if (cfg.contact) {
    // Phone
    const topPhone = document.getElementById("topbar-phone");
    if (topPhone) {
      topPhone.href = `tel:${cfg.contact.phoneRaw}`;
      const span = topPhone.querySelector("span");
      if (span) span.textContent = cfg.contact.phone;
    }

    const contactPhoneVal = document.getElementById("contact-phone-val");
    if (contactPhoneVal) {
      contactPhoneVal.href = `tel:${cfg.contact.phoneRaw}`;
      contactPhoneVal.textContent = cfg.contact.phone;
    }

    // Email
    const topEmail = document.getElementById("topbar-email");
    if (topEmail) {
      topEmail.href = `mailto:${cfg.contact.email}`;
      const span = topEmail.querySelector("span");
      if (span) span.textContent = cfg.contact.email;
    }

    const contactEmailVal = document.getElementById("contact-email-val");
    if (contactEmailVal) {
      contactEmailVal.href = `mailto:${cfg.contact.email}`;
      contactEmailVal.textContent = cfg.contact.email;
    }

    // Address
    const contactAddressVal = document.getElementById("contact-address-val");
    if (contactAddressVal && cfg.contact.address) {
      contactAddressVal.textContent = cfg.contact.address;
    }

    // WhatsApp Buttons
    const waUrl = `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(cfg.contact.whatsappPreFill || "Hello! I would like to inquire about a construction project.")}`;
    
    const waDirect = document.getElementById("whatsapp-direct-link");
    if (waDirect) waDirect.href = waUrl;

    const waFloat = document.getElementById("floating-whatsapp-btn");
    if (waFloat) waFloat.href = waUrl;
  }
}

/**
 * Mobile Drawer Menu & Sticky Nav with Active Section Tracking
 */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.classList.toggle("is-active");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));
}

/**
 * Animated Numerical Counter Effect for Statistics
 */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  let hasAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          const duration = 1800; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.ceil(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const heroSection = document.getElementById("hero");
  if (heroSection) {
    counterObserver.observe(heroSection);
  }
}

/**
 * Interactive Construction Cost Estimator
 */
function initEstimator() {
  const typeBtns = document.querySelectorAll("#estimator-types .type-btn");
  const tierBtns = document.querySelectorAll("#estimator-tiers .type-btn");
  const areaRange = document.getElementById("area-range");
  const areaVal = document.getElementById("area-val");
  const priceDisplay = document.getElementById("estimate-price-display");
  const lockBtn = document.getElementById("lock-estimate-btn");

  if (!areaRange || !priceDisplay) return;

  let baseRate = 175; // Default residential
  let activeTypeName = "Residential House";
  let multiplier = 1.0; // Standard

  function calculateEstimate() {
    const area = parseInt(areaRange.value, 10);
    areaVal.textContent = `${area.toLocaleString()} sq.ft.`;

    const total = area * baseRate * multiplier;
    const low = Math.round((total * 0.92) / 5000) * 5000;
    const high = Math.round((total * 1.08) / 5000) * 5000;

    priceDisplay.textContent = `$${low.toLocaleString()} – $${high.toLocaleString()}`;
  }

  // Project Type Selection
  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      typeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      baseRate = parseFloat(btn.getAttribute("data-base") || "175");
      activeTypeName = btn.textContent.trim();
      calculateEstimate();
    });
  });

  // Finish Tier Selection
  tierBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tierBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      multiplier = parseFloat(btn.getAttribute("data-multiplier") || "1.0");
      calculateEstimate();
    });
  });

  // Area Slider Input
  areaRange.addEventListener("input", calculateEstimate);

  // Initial Calculation
  calculateEstimate();

  // Lock in estimate button -> scrolls to form and populates project info
  if (lockBtn) {
    lockBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const form = document.getElementById("construction-quote-form");
      const sizeInput = document.getElementById("contact-size");
      const typeSelect = document.getElementById("contact-type");
      const messageBox = document.getElementById("contact-message");

      if (sizeInput) {
        sizeInput.value = `${areaRange.value} sq.ft. (Estimated: ${priceDisplay.textContent})`;
      }

      if (typeSelect) {
        for (let i = 0; i < typeSelect.options.length; i++) {
          if (typeSelect.options[i].text.toLowerCase().includes(activeTypeName.toLowerCase().split(" ")[0])) {
            typeSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (messageBox && !messageBox.value) {
        messageBox.value = `I generated an online estimate for a ${activeTypeName} (${areaRange.value} sq.ft.) in the range of ${priceDisplay.textContent}. Please get in touch to schedule a site review.`;
      }

      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }
}

/**
 * Dynamic Project Portfolio Grid & Category Filtering
 */
function initProjectsGallery() {
  const grid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".projects-filter .filter-btn");
  if (!grid) return;

  const projects = (window.SITE_CONFIG && window.SITE_CONFIG.projects) || [];

  function renderProjects(categoryFilter = "all") {
    grid.innerHTML = "";

    const filtered = categoryFilter === "all" 
      ? projects 
      : projects.filter(p => {
          if (categoryFilter === "commercial") {
            return p.category === "commercial" || p.category === "shop";
          }
          return p.category === categoryFilter;
        });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--concrete-400);">No projects found in this category.</div>`;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-project-id", project.id);

      card.innerHTML = `
        <div class="project-img-wrap">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-overlay">
            <span class="project-category">${project.categoryName || project.category}</span>
            <h3 class="project-title">${project.title}</h3>
          </div>
        </div>
        <div class="project-meta">
          <span class="project-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${project.location}
          </span>
          <span class="project-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            ${project.area}
          </span>
          <span class="project-view-cta">
            Details &rarr;
          </span>
        </div>
      `;

      card.addEventListener("click", () => openProjectModal(project.id));
      grid.appendChild(card);
    });
  }

  // Filter click events
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects("all");
}

/**
 * Open Project Lightbox Modal with Full Specifications
 */
function openProjectModal(projectId) {
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalContent = document.getElementById("modal-dynamic-content");
  if (!modalBackdrop || !modalContent) return;

  const projects = (window.SITE_CONFIG && window.SITE_CONFIG.projects) || [];
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const highlightsHtml = project.highlights && project.highlights.length 
    ? `
      <div class="modal-highlights">
        <h4>Key Engineering Highlights</h4>
        <ul class="modal-highlights-list">
          ${project.highlights.map(h => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ${h}
            </li>
          `).join("")}
        </ul>
      </div>
    ` : "";

  modalContent.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-image">
    <div class="modal-content">
      <div class="modal-category">${project.categoryName || project.category}</div>
      <h2 class="modal-title">${project.title}</h2>
      
      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <span>Location</span>
          <strong>${project.location}</strong>
        </div>
        <div class="modal-spec-item">
          <span>Total Area</span>
          <strong>${project.area}</strong>
        </div>
        <div class="modal-spec-item">
          <span>Year Completed</span>
          <strong>${project.year}</strong>
        </div>
        <div class="modal-spec-item">
          <span>Build Duration</span>
          <strong>${project.duration || "N/A"}</strong>
        </div>
      </div>

      <p class="modal-description">${project.description}</p>
      
      ${highlightsHtml}

      <div style="display: flex; gap: 16px; margin-top: 30px; flex-wrap: wrap;">
        <button type="button" class="btn btn-primary" onclick="requestQuoteForProject('${project.title.replace(/'/g, "\\'")}')">
          Request Quote For Similar Project
        </button>
        <button type="button" class="btn btn-outline" onclick="closeModal()">
          Close
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Open Service Scope Modal with Technical Deliverables
 */
function openServiceModal(serviceId) {
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalContent = document.getElementById("modal-dynamic-content");
  if (!modalBackdrop || !modalContent) return;

  const services = (window.SITE_CONFIG && window.SITE_CONFIG.services) || [];
  const service = services.find(s => s.id === serviceId);
  if (!service) return;

  const featuresHtml = service.features && service.features.length 
    ? `
      <div class="modal-highlights">
        <h4>Included Deliverables &amp; Engineering Scope</h4>
        <ul class="modal-highlights-list">
          ${service.features.map(f => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ${f}
            </li>
          `).join("")}
        </ul>
      </div>
    ` : "";

  modalContent.innerHTML = `
    <img src="${service.image}" alt="${service.title}" class="modal-image">
    <div class="modal-content">
      <div class="modal-category">Construction Division</div>
      <h2 class="modal-title">${service.title}</h2>
      <p style="font-weight: 600; color: var(--gold-primary); margin-bottom: 16px;">${service.tagline}</p>
      <p class="modal-description">${service.details || service.shortDesc}</p>
      
      ${featuresHtml}

      <div style="display: flex; gap: 16px; margin-top: 30px; flex-wrap: wrap;">
        <button type="button" class="btn btn-primary" onclick="requestQuoteForService('${service.title.replace(/'/g, "\\'")}')">
          Get Quote For This Service
        </button>
        <button type="button" class="btn btn-outline" onclick="closeModal()">
          Close
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Make accessible to global onclick attributes
window.openServiceModal = openServiceModal;
window.openProjectModal = openProjectModal;

/**
 * Modal Close Handler
 */
function closeModal() {
  const modalBackdrop = document.getElementById("modal-backdrop");
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("active");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

window.closeModal = closeModal;

// Modal close button & backdrop listeners
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

/**
 * Pre-fill contact form from Modal CTA
 */
function requestQuoteForProject(projectTitle) {
  closeModal();
  const messageBox = document.getElementById("contact-message");
  if (messageBox) {
    messageBox.value = `I am interested in discussing a project similar in scale and architecture to "${projectTitle}". Please provide preliminary consultation details.`;
  }
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function requestQuoteForService(serviceTitle) {
  closeModal();
  const typeSelect = document.getElementById("contact-type");
  if (typeSelect) {
    for (let i = 0; i < typeSelect.options.length; i++) {
      if (serviceTitle.toLowerCase().includes(typeSelect.options[i].value.toLowerCase().slice(0, 5))) {
        typeSelect.selectedIndex = i;
        break;
      }
    }
  }
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

window.requestQuoteForProject = requestQuoteForProject;
window.requestQuoteForService = requestQuoteForService;

/**
 * Contact Form Submission & Validation with Toast Notification
 */
function initContactForm() {
  const form = document.getElementById("construction-quote-form");
  const toast = document.getElementById("toast-notice");
  const toastMsg = document.getElementById("toast-message");

  if (!form) return;

  function showToast(message, isSuccess = true) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.style.background = isSuccess ? "#10b981" : "#ef4444";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("[name='name']").value.trim();
    const phone = form.querySelector("[name='phone']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const projectType = form.querySelector("[name='projectType']").value;
    const message = form.querySelector("[name='message']").value.trim();

    if (!name || !phone || !email || !projectType || !message) {
      showToast("Please fill in all required fields marked with *", false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please provide a valid email address.", false);
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Processing Request...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast("Thank you! Your quote request has been received. Our senior engineer will contact you within 24 hours.", true);
    }, 900);
  });
}

/**
 * Back to Top & Scroll Enhancements
 */
function initScrollBehaviors() {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
