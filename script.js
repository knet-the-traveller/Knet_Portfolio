/* ============================================================
   SCRIPT.JS — Mark Kenneth Galario Resume
   All resume data lives in the resumeData object below.
   Edit it to update the entire page.
   ============================================================ */

/* ============================================================
   1. RESUME DATA OBJECT
   ============================================================ */
const resumeData = {
  name: "Mark Kenneth Galario",
  title: "BSIT Student | Hackathon Finalist | Operations & Tech Community Leader",
  location: "San Jose Del Monte, Bulacan",
  email: "markkennethbgalario@gmail.com",
  phone: "+639214743237",

  /* Hero greeting & paragraph */
  heroGreeting: "Hi, I'm",
  heroBio: "Aspiring IT professional and DOST Scholar currently pursuing my BSIT degree at the Polytechnic University of the Philippines Manila. Passionate about software development and emerging tech, I strive to build impactful digital solutions that serve the broader community.",

  /* Hero cut-out photo (transparent PNG) */
  heroPhoto: {
    src: "images/profile-no-bg.png",
    alt: "Portrait of Mark Kenneth Galario",
    width: 1500,
    height: 1500
  },

  /* Social links */
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/markkennethgalario2", 
      ariaLabel: "Mark's Facebook profile",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#1877F2" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/k.kun02/", 
      ariaLabel: "Mark's Instagram profile",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><defs><radialGradient id="igGrad" r="150%" cx="30%" cy="107%"><stop stop-color="#fdf497" offset="0%"/><stop stop-color="#fdf497" offset="5%"/><stop stop-color="#fd5949" offset="45%"/><stop stop-color="#d6249f" offset="60%"/><stop stop-color="#285AEB" offset="90%"/></radialGradient></defs><path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-kenneth-galario/", 
      ariaLabel: "Mark's LinkedIn profile",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    },
    {
      name: "GitHub",
      url: "https://github.com/knet-the-traveller", 
      ariaLabel: "Mark's GitHub profile",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    }
  ],

  /* Highlights — ONLY facts from the resume */
  highlights: [
    { number: 5,   prefix: "Top ", suffix: "", label: "of 700+ teams (eGOVPH)", countTo: 5 },
    { number: 5,   prefix: "Top ", suffix: "", label: "of 100+ entries (KPMG)", countTo: 5 },
    { number: 2,   prefix: "",     suffix: "nd Place", label: "(ENEDA)", countTo: 2 },
    { number: 7,   prefix: "",     suffix: "", label: "Organizations", countTo: 7 },
    { number: 5,   prefix: "",     suffix: "", label: "Hackathons / Competitions", countTo: 5 }
  ],

  /* Hackathons and Competitions */
  hackathons: [
    {
      id: 1,
      title: "eGOVPH Hackathon",
      result: "Top 5 Finalist",
      category: "finalist",
      org: "eGovPH",
      theme: "Collaborative Solution for a Better Philippines",
      date: "July 2026",
      photos: [
        {
          src: "images/egov.jpg",
          alt: "Mark Kenneth Galario and teammates at the eGOVPH Hackathon Finals",
          caption: "eGOVPH Hackathon Finals — Top 5 Finalist nationwide out of 700+ registered teams, July 2026"
        }
      ],
      bullets: [
        "Architected and developed a full-stack multi-modal transit platform integrating real-time tracking, station schedules, and route alignments across 5 transit networks: railways (LRT/MRT/PNR), buses, ferries, airports, and seaports nationwide.",
        "Engineered live telemetry and interactive mapping systems, incorporating vehicle speed and direction tracking, dynamic station arrival timelines, and low-connectivity SMS fallback alerts for commuters.",
        "Implemented an interactive Line View route engine allowing users to plan origin-to-destination journeys, inspect upcoming departure headways, and track active fleet positions in real time.",
        "Recognized as a Top 5 Finalist nationwide out of 700+ registered teams and 130+ final submissions across the Philippines."
      ]
    },
    {
      id: 2,
      title: "KPMG Academic Innovation Challenge 2026",
      result: "Top 5 Finalist",
      category: "finalist",
      org: "R.G. Manabat & Co.",
      theme: "Academic Innovation Challenge: AI Agents",
      date: "June 2026",
      photos: [
        {
          src: "images/kpmg.jpg",
          alt: "Mark Kenneth Galario presenting at the KPMG Academic Innovation Challenge",
          caption: "KPMG Academic Innovation Challenge 2026 — Top 5 Finalist out of 100+ entries, June 2026"
        }
      ],
      bullets: [
        "Created and developed an AI-powered academic assistant that transforms course requirements into personalized and adaptive study plans using Microsoft Copilot Studio.",
        "Implemented intelligent scheduling features that analyze deadlines, workload, and student availability to recommend realistic study sessions and prioritize tasks.",
        "Recognized as a Top 5 Finalist out of more than 100 participating teams/entries, demonstrating innovation, technical excellence, and practical application of AI in education."
      ]
    },
    {
      id: 3,
      title: "PUP Technological Festival 2025 Hackathon",
      result: "Qualifier",
      category: "qualifier",
      org: "PUP Manila",
      theme: "PUP Digital Bayanihan: Fostering a Smart Future Together",
      date: "October 2025",
      photos: [
        {
          src: "images/pup-tech-fest.jpg",
          alt: "Mark Kenneth Galario and participants in the PUP ICTD Computer Laboratory during the PUP Technological Festival 2025 Hackathon Qualifier",
          caption: "PUP Technological Festival 2025 Hackathon Qualifier, October 2025"
        }
      ],
      bullets: [
        "Designed and implemented a digital platform that enables PUP students to promote and manage their small businesses.",
        "Positively evaluated for its practicality and student-centered approach."
      ]
    },
    {
      id: 4,
      title: "Meralco IDOL Hackathon",
      result: "Qualifier",
      category: "qualifier",
      org: "Meralco Academy",
      theme: "Beyond the Grid: Shaping the Future of Electric Utility with Next-Gen Solutions",
      date: "November 2024",
      photos: [
        {
          src: "images/meralco.jpg",
          alt: "Mark Kenneth Galario participating at the Meralco IDOL Hackathon",
          caption: "Meralco IDOL Hackathon — Energy software solutions qualifier at Meralco Academy, November 2024"
        }
      ],
      bullets: [
        "Conceptualized and developed an energy-focused software solution aimed at optimizing power distribution and enhancing customer utility tracking.",
        "Engineered functional prototypes and interactive user workflows using modern web technologies to address real-world energy consumption challenges."
      ]
    },
    {
      id: 5,
      title: "ENEDA Hackathon",
      result: "2nd Place",
      category: "winner",
      org: "Miriam College",
      theme: "Cultivating Innovation Student Hackathon Competition",
      date: "September 2024",
      photos: [
        {
          src: "images/eneda.jpg",
          alt: "Mark Kenneth Galario holding 2nd Place award at the ENEDA Hackathon",
          caption: "ENEDA Hackathon — 2nd Place Winner at Miriam College, September 2024"
        }
      ],
      bullets: [
        "Created and developed a comprehensive marketing idea for Virtual Science Lab.",
        "Presented and defended in front of a panel of experts, addressing feedback and receiving positive evaluations for creativity and thoroughness."
      ]
    }
  ],

  /* Projects */
  projects: [
    {
      name: "eGuide",
      tagline: "Philippine transit & infrastructure map",
      description: "A comprehensive Philippine transit and infrastructure map covering LRT-1/2, MRT-3/7, PNR, BGC Bus, and EDSA Carousel routes, with live aircraft tracking, airport and seaport layers, and station proximity alerts.",
      tags: ["Next.js", "TypeScript", "Leaflet", "Mapbox GL", "OpenSky API"],
      image: {
        src: "images/eguide.jpg",
        alt: "eGuide transit map showing Philippine rail lines and infrastructure"
      },
      links: { github: "", live: "https://eguide-one.vercel.app/" },
      badge: "Featured"
    },
    {
      name: "ARWays",
      tagline: "Let's find ARWays",
      description: "A mobile-first AR walking navigation web app that guides users from point A to point B using a live camera view, a map, and an on-screen guide line, with on-device landmark recognition and offline support. Built for the AppBuildersPH Hackathon 2026 (Local AI theme).",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "Transformers.js", "PWA"],
      image: {
        src: "images/arways.jpg",
        alt: "ARWays augmented reality walking navigation interface with live camera guide"
      },
      links: {
        github: "",
        live: "https://ar-way.vercel.app/"
      },
      badge: ""
    },
    {
      name: "Claro",
      tagline: "Let's make it Claro",
      description: "Claro is an autonomous student support and service desk platform that uses natural language processing to route campus concerns, from portal lockouts to facility outages, to the correct university office. A unified dashboard provides real-time ticket tracking and transparent campus advisories.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Microsoft Copilot"],
      image: {
        src: "images/claro.png",
        alt: "Claro student support platform ticket routing dashboard and login portal"
      },
      links: { github: "", live: "https://claro-diaper-devs.vercel.app/login" },
      badge: "Team project"
    },
    {
      name: "RILES",
      tagline: "Keep It On Track!",
      description: "RILES is an autonomous academic dispatcher that schedules study around the transit constraints of student commuters. It analyzes commute logs, class gaps, and daily availability to turn heavy course loads into actionable study plans, with an interactive AI hub to keep students on track.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Microsoft Copilot"],
      image: {
        src: "images/riles.png",
        alt: "RILES autonomous academic dispatcher interface and commuter study scheduler"
      },
      links: { github: "", live: "https://riles.vercel.app/" },
      badge: ""
    },
    {
      name: "AgriTayo",
      tagline: "Agri Ka, Agri Ako, Agri Tayo!",
      description: "A multi-role harvest marketplace that connects sellers, buyers, and drivers to reduce post-harvest food waste and middleman exploitation, with listings, role-based dashboards, maps, and analytics.",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Maps", "Recharts", "Vercel"],
      image: {
        src: "images/agri-tayo.png",
        alt: "AgriTayo harvest marketplace listings and direct farm-to-buyer platform"
      },
      links: { github: "", live: "https://agri-tayo.vercel.app/" },
      badge: "Hackathon project"
    }
  ],

  /* Experience (all 7 roles ongoing; ordered newest start date first) */
  experience: [
    {
      role: "Technical Lead",
      company: "Google Developer Groups on Campus PUP",
      start: "2026-10",
      ongoing: true,
      logo: {
        src: "images/google-logo.jpg",
        alt: "Google Developer Groups on Campus PUP logo"
      },
      initials: "GDG",
      photos: [],
      bullets: [
        "Direct technical strategy, curriculum development, and hands-on workshops centered on Google technologies and modern developer tools.",
        "Collaborate with executive leads to plan hackathons, study jams, and technical showcases aimed at upskilling the student developer community."
      ]
    },
    {
      role: "Vice Chief Operations Officer",
      company: "CISCO Net Connect PUP, Manila",
      start: "2026-08",
      ongoing: true,
      logo: {
        src: "images/cisco-logo.png",
        alt: "CISCO Net Connect PUP logo"
      },
      initials: "CNC",
      photos: [
        {
          src: "images/cisco.jpg",
          alt: "CISCO Net Connect PUP operations, workshop, and organizational initiatives",
          caption: "CISCO Net Connect PUP — Vice Chief Operations Officer, August 2026"
        }
      ],
      bullets: [
        "Spearhead end-to-end operational workflows, technical workshops, and organizational logistics across networking and cybersecurity initiatives.",
        "Supervise committee directors and volunteers to align event execution, resource allocation, and timeline milestones."
      ]
    },
    {
      role: "Operations Member",
      company: "AWS User Group e:Novators Philippines, Manila",
      start: "2026-06",
      ongoing: true,
      logo: {
        src: "images/enov-logo.png",
        alt: "AWS User Group e:Novators Philippines logo"
      },
      initials: "AWS",
      photos: [
        {
          src: "images/enov.jpg",
          alt: "AWS User Group e:Novators Philippines tech event and community coordination",
          caption: "AWS User Group e:Novators Philippines — Operations Member, June 2026"
        }
      ],
      bullets: [
        "Appointed as an Operations Member, contributing to the organization and delivery of technology-focused community events.",
        "Assist in managing event operations, participant coordination, and administrative support to enhance member engagement."
      ]
    },
    {
      role: "Technical Member",
      company: "Work Flow PH, PUP Manila",
      start: "2026-03",
      ongoing: true,
      logo: {
        src: "images/workflowph-logo.png",
        alt: "Work Flow PH logo"
      },
      initials: "WF",
      photos: [
        {
          src: "images/workflow.jpg",
          alt: "Work Flow PH technical planning, team operations, and project workflows",
          caption: "Work Flow PH — Technical Member, March 2026"
        }
      ],
      bullets: [
        "Collaborated with cross-functional teams to support project objectives and ensure efficient workflow execution.",
        "Assisted in coordinating administrative tasks, documentation, and operational processes, contributing to smooth day-to-day business operations."
      ]
    },
    {
      role: "Leadership Development Department",
      company: "Microsoft Campus Club - PUP",
      start: "2025-11",
      ongoing: true,
      logo: {
        src: "images/microsoft-logo.png",
        alt: "Microsoft Campus Club - PUP logo"
      },
      initials: "MCC",
      photos: [],
      bullets: [
        "Facilitate organizational leadership training programs, capacity-building workshops, and internal development initiatives for student leaders.",
        "Collaborate with cross-functional committees to organize Microsoft technology webinars, community sessions, and member onboarding programs."
      ]
    },
    {
      role: "Operations Member",
      company: "AcademiTech Research and Knowledge (ARK), PUP Manila",
      start: "2025-11",
      ongoing: true,
      logo: {
        src: "images/akademitech-logo.png",
        alt: "AcademiTech Research and Knowledge (ARK) logo"
      },
      initials: "ARK",
      photos: [
        {
          src: "images/akademitech.jpg",
          alt: "AcademiTech Research and Knowledge (ARK) club logistics, registration, and workshops",
          caption: "AcademiTech Research and Knowledge (ARK) — Operations Member, November 2025"
        }
      ],
      bullets: [
        "Collaborated with technical and marketing teams to align operational workflows with event objectives.",
        "Assisted in organizing logistics, registrations, and documentation for ARK Club activities, ensuring smooth and timely operations."
      ]
    },
    {
      role: "Operations Member",
      company: "AWS Cloud Club PUP, PUP Manila",
      start: "2025-10",
      ongoing: true,
      logo: {
        src: "images/aws-pup-logo.png",
        alt: "AWS Cloud Club PUP logo"
      },
      initials: "AWS-PUP",
      photos: [
        {
          src: "images/aws-pup.jpg",
          alt: "AWS Cloud Club PUP cloud event attendees, webinars, and participant coordination",
          caption: "AWS Cloud Club PUP — Operations Member, October 2025"
        }
      ],
      bullets: [
        "Coordinated and supported the execution of cloud-related events, workshops, and webinars.",
        "Assisted in managing registrations and participant data, helping accommodate dozens of student attendees per event."
      ]
    }
  ],

  /* Education (3 entries: PUP, DOST Scholar, Sapang Palay combined) */
  education: [
    {
      id: "pup",
      institution: "Polytechnic University of the Philippines",
      location: "Sta. Mesa, Manila",
      program: "Bachelor of Science in Information Technology",
      year: "2024\u2013Present",
      honors: "President Lister",
      logo: "images/pup-logo.png",
      logoAlt: "Polytechnic University of the Philippines logo",
      fallbackInitials: "PUP"
    },
    {
      id: "dost",
      institution: "DOST Scholar",
      law: "RA 7687",
      issuer: "Department of Science and Technology (DOST)",
      year: "2024\u2013Present",
      logo: "images/dost-logo.png",
      logoAlt: "Department of Science and Technology logo",
      fallbackInitials: "DOST"
    },
    {
      id: "spnhs",
      institution: "Sapang Palay National High School",
      location: "San Jose Del Monte, Bulacan",
      year: "2018\u20132024",
      logo: "images/spnhs-logo.png",
      logoAlt: "Sapang Palay National High School logo",
      fallbackInitials: "SPNHS",
      isCombined: true,
      levels: [
        {
          level: "Junior High School (Special Program in STE)",
          year: "2018\u20132022",
          honors: "With High Honors (Junior High School)"
        },
        {
          level: "Senior High School (STEM Strand)",
          year: "2022\u20132024",
          honors: "With High Honors (Senior High School)"
        }
      ]
    }
  ],

  /* Navigation sections */
  navLinks: [
    { label: "Hackathons",   href: "#hackathons" },
    { label: "Projects",     href: "#projects" },
    { label: "Experience",   href: "#experience" },
    { label: "Education",    href: "#education" },
    { label: "Gallery",      href: "#gallery" },
    { label: "Contact",      href: "#contact" }
  ]
};


/* ============================================================
   2. DOM REFERENCES
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const header     = $("#header");
const navToggle  = $("#navToggle");
const navMenu    = $("#navMenu");
const navBackdrop= $("#navBackdrop");
const themeToggle= $("#themeToggle");
const scrollProgress = $("#scrollProgress");
const backToTop  = $("#backToTop");
const toastEl    = $("#toast");
const modalOverlay = $("#modalOverlay");
const modalEl    = $("#modal");
const modalContent = $("#modalContent");
const modalClose = $("#modalClose");
const viewportBadge = $("#viewportBadge");

/* Lightbox DOM references */
const lightboxOverlay = $("#lightboxOverlay");
const lightbox        = $("#lightbox");
const lightboxClose   = $("#lightboxClose");
const lightboxPrev    = $("#lightboxPrev");
const lightboxNext    = $("#lightboxNext");
const lightboxImg     = $("#lightboxImg");
const lightboxTitle   = $("#lightboxTitle");
const lightboxCounter = $("#lightboxCounter");
const lightboxCaption = $("#lightboxCaption");
const lightboxMedia   = $("#lightboxMedia");

/* Camera icon SVG snippet */
const CAMERA_ICON_SVG = `<svg class="icon icon--camera" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;

/* Global image error handler for graceful fallbacks */
window.handleImageError = function(img, initials, label) {
  img.style.display = "none";
  const parent = img.parentElement;
  if (!parent) return;
  const existing = parent.querySelector(".image-placeholder-fallback");
  if (existing) return;
  const placeholder = document.createElement("div");
  placeholder.className = "image-placeholder-fallback";
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", label || "Photo unavailable");
  placeholder.innerHTML = `
    <span style="font-size:1.125rem;font-weight:700;display:block">${initials || 'MG'}</span>
    <span style="font-size:0.75rem;opacity:0.85;margin-top:0.25rem">${label || 'Photo placeholder'}</span>
  `;
  parent.appendChild(placeholder);
};

/* Helper to gather all photos across hackathons & experiences for the gallery */
function getAllGalleryPhotos() {
  const list = [];
  resumeData.hackathons.forEach(h => {
    if (h.photos && h.photos.length > 0) {
      h.photos.forEach(p => {
        list.push({
          src: p.src,
          alt: p.alt,
          caption: p.caption,
          eventTitle: h.title,
          category: h.category
        });
      });
    }
  });
  resumeData.experience.forEach(e => {
    if (e.photos && e.photos.length > 0) {
      e.photos.forEach(p => {
        list.push({
          src: p.src,
          alt: p.alt,
          caption: p.caption,
          eventTitle: e.company,
          role: e.role
        });
      });
    }
  });
  return list;
}


/* ============================================================
   3. INITIALIZATION
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderHero();
  renderHighlights();
  renderHackathons();
  renderProjects();
  renderExperience();
  renderEducation();
  renderGallery();
  renderContact();
  renderFooter();

  initTheme();
  initNavToggle();
  initSmoothScroll();
  initScrollSpy();
  initScrollProgress();
  initBackToTop();
  initRevealAnimations();
  initCountUp();
  initModal();
  initLightbox();
  initTimelineToggle();
  initEducationToggle();
  initPrintButton();
  initContactActions();
  initContactForm();
  initViewportBadge();
});


/* ============================================================
   4. RENDER FUNCTIONS
   Each function injects HTML into its section container.
   ============================================================ */

/* ---- Navigation ---- */
function renderNav() {
  navMenu.innerHTML = resumeData.navLinks.map(link =>
    `<li role="none">
       <a href="${link.href}" class="nav__link" role="menuitem">${link.label}</a>
     </li>`
  ).join("");
}

/* ---- Hero Section ---- */
function renderHero() {
  const words = resumeData.name.trim().split(/\s+/);
  const initials = words.length > 1
    ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
    : words[0].slice(0, 2).toUpperCase();

  $("#hero").innerHTML = `
    <div class="hero__grid">
      <!-- 1. Intro: Greeting & Name (Left top) -->
      <div class="hero__intro">
        <span class="hero__greeting">${resumeData.heroGreeting}</span>
        <h1 class="hero__name"><span class="hero__name-first">Mark Kenneth</span> <span class="hero__name-last">Galario</span></h1>
      </div>

      <!-- 2. Photo Column: Cut-out image with static glow & silhouette (Center) -->
      <div class="hero__photo-col">
        <div class="hero__photo-glow" aria-hidden="true"></div>
        <div class="hero__photo-wrap">
          <img src="${resumeData.heroPhoto.src}"
               alt="${resumeData.heroPhoto.alt}"
               class="hero__photo-img"
               width="${resumeData.heroPhoto.width}"
               height="${resumeData.heroPhoto.height}"
               loading="eager"
               decoding="sync"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="hero__photo-fallback" aria-hidden="true" style="display:none;">${initials}</div>
        </div>
      </div>

      <!-- 3. Bio: Paragraph, Buttons & Print info (Left bottom) -->
      <div class="hero__bio">
        <p class="hero__bio-text">${resumeData.heroBio}</p>
        <div class="hero__print-contact" aria-hidden="true">
          <span>${resumeData.location}</span> &bull;
          <span>${resumeData.phone}</span> &bull;
          <span>${resumeData.email}</span>
        </div>
        <div class="hero__actions">
          <a href="#contact" class="btn btn--hero-primary">Contact Me</a>
          <button class="btn btn--hero-outline" id="printBtn" aria-label="Download or print resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </button>
        </div>
      </div>

      <!-- 4. Connect: Heading & 4 Social icon links (Right) -->
      <div class="hero__connect">
        <h2 class="hero__connect-title">Let's Connect, Shall We?</h2>
        <div class="hero__socials">
          ${resumeData.socials.map(s => `
            <a href="${s.url}"
               class="social-tile"
               aria-label="${s.ariaLabel}"
               ${s.url !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
              ${s.svg}
            </a>
          `).join("")}
        </div>
      </div>
    </div>`;

  initSocialLinks();
}

/* ---- Social links click listener (prevents jump when url is #) ---- */
function initSocialLinks() {
  $$(".social-tile").forEach(tile => {
    tile.addEventListener("click", (e) => {
      const href = tile.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
      }
    });
  });
}

/* ---- Highlights Strip ---- */
function renderHighlights() {
  // Dynamically drive the organizations count from resumeData.experience.length
  const orgCount = resumeData.experience.length;
  const items = resumeData.highlights.map(h => {
    if (h.label.toLowerCase().includes("organization")) {
      return { ...h, number: orgCount, countTo: orgCount };
    }
    return h;
  });

  $("#highlights").innerHTML = `
    <div class="highlights__grid">
      ${items.map(h => `
        <div class="highlight-stat reveal" aria-label="${h.prefix}${h.countTo}${h.suffix} ${h.label}">
          <div class="highlight-stat__number"
               data-count-to="${h.countTo}"
               data-prefix="${h.prefix}"
               data-suffix="${h.suffix}"
               aria-hidden="true">
            ${h.prefix}${h.countTo}${h.suffix}
          </div>
          <div class="highlight-stat__label" aria-hidden="true">${h.label}</div>
        </div>
      `).join("")}
    </div>`;
}

/* ---- Hackathons & Competitions Section ---- */
function renderHackathons() {
  const getBadgeClass = (cat) => {
    if (cat === "finalist") return "badge--finalist";
    if (cat === "winner") return "badge--winner";
    return "badge--qualifier";
  };

  $("#hackathons").innerHTML = `
    <div class="container">
      <div class="section__header reveal">
        <h2 class="section__title">Hackathons &amp; Competitions</h2>
        <p class="section__subtitle">Primary showcase of competitive achievements</p>
      </div>
      <div class="hackathons__grid" id="hackathonsGrid">
        ${resumeData.hackathons.map(h => {
          const hasPhoto = h.photos && h.photos.length > 0;
          const photo = hasPhoto ? h.photos[0] : null;
          return `
          <article class="card card--clickable hackathon-card reveal"
                   data-hackathon-id="${h.id}"
                   tabindex="0"
                   role="button"
                   aria-label="View details for ${h.title}">
            <div class="hackathon-card__media">
              ${hasPhoto ? `
                <div class="photo-thumb photo-thumb--card" tabindex="0" role="button"
                     data-hackathon-photo-id="${h.id}"
                     aria-label="View photo for ${h.title}: ${photo.caption}">
                  <img src="${photo.src}" alt="${photo.alt}" class="photo-thumb__img"
                       loading="lazy" decoding="async" width="360" height="270"
                       onerror="handleImageError(this, '${h.title.slice(0, 3)}', '${h.title}')">
                  <button type="button" class="photo-thumb__badge"
                          data-hackathon-photo-id="${h.id}"
                          aria-label="View photo for ${h.title}">
                    ${CAMERA_ICON_SVG}
                    <span>View photo${h.photos.length > 1 ? `s (${h.photos.length})` : ''}</span>
                  </button>
                </div>
              ` : `
                <div class="photo-thumb photo-thumb--placeholder" aria-label="No photo available yet for ${h.title}">
                  <div class="photo-thumb__placeholder-inner">
                    <svg class="icon icon--camera-off" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    <span class="photo-thumb__placeholder-text">Photo coming soon</span>
                  </div>
                </div>
              `}
            </div>
            <div class="hackathon-card__body">
              <div class="hackathon-card__header">
                <span class="badge ${getBadgeClass(h.category)}">${h.result}</span>
              </div>
              <h3 class="hackathon-card__title">${h.title}</h3>
              <div class="hackathon-card__org">${h.org}</div>
              ${h.theme ? `<div class="hackathon-card__theme">"${h.theme}"</div>` : ''}
              <div class="hackathon-card__date">${h.date}</div>
              <p class="hackathon-card__peek">${h.bullets[0]}</p>
              <span class="hackathon-card__cta" aria-hidden="true">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          </article>
        `;
        }).join("")}
      </div>
    </div>`;

  // Attach thumbnail click handlers
  $$("[data-hackathon-photo-id]").forEach(el => {
    const handleThumbClick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const id = parseInt(el.dataset.hackathonPhotoId, 10);
      const hackathon = resumeData.hackathons.find(h => h.id === id);
      if (hackathon && hackathon.photos && hackathon.photos.length > 0) {
        openLightbox(hackathon.photos, 0, hackathon.title);
      }
    };
    el.addEventListener("click", handleThumbClick);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleThumbClick(e);
      }
    });
  });
}

/* ---- Projects Section ---- */
function renderProjects() {
  const container = $("#projects");
  if (!container) return;

  container.innerHTML = `
    <div class="container container--projects">
      <div class="section__header reveal">
        <h2 class="section__title">Projects</h2>
        <p class="section__subtitle">Things I've built</p>
      </div>
      <div class="projects__grid" id="projectsGrid">
        ${resumeData.projects.map((p, idx) => {
          const isFeatured = p.badge === "Featured" || idx === 0;
          const hasGithub = Boolean(p.links && p.links.github);
          const hasLive = Boolean(p.links && p.links.live);
          const hasActions = hasGithub || hasLive;
          const desc = p.description ? p.description : "Details coming soon.";
          const isDescMuted = !p.description;
          const imgSrc = p.image ? (typeof p.image === 'string' ? p.image : p.image.src) : null;
          const imgAlt = p.image && p.image.alt ? p.image.alt : `${p.name} screenshot`;

          return `
            <article class="card project-card reveal ${isFeatured ? 'project-card--featured' : ''}" style="transition-delay: ${idx * 60}ms;">
              <div class="project-card__media" role="button" tabindex="0" aria-label="View screenshot: ${p.name}" data-project-idx="${idx}">
                ${p.badge ? `
                  <span class="badge project-card__badge ${p.badge === 'Featured' ? 'project-card__badge--featured' : ''}">${p.badge}</span>
                ` : ''}
                ${imgSrc ? `
                  <div class="project-card__img-wrap">
                    <img src="${imgSrc}" alt="${imgAlt}" loading="lazy" decoding="async" width="800" height="500" class="project-card__img" onload="if (this.naturalHeight > this.naturalWidth) this.closest('.project-card__media').classList.add('project-card__media--portrait');" onerror="this.onerror=null; this.closest('.project-card__media').innerHTML='<div class=\\'project-card__placeholder\\' aria-hidden=\\'true\\'><span class=\\'project-card__placeholder-initial\\'>${p.name.charAt(0)}</span><span class=\\'project-card__placeholder-name\\'>${p.name}</span></div>';">
                  </div>
                ` : `
                  <div class="project-card__placeholder" aria-hidden="true">
                    <span class="project-card__placeholder-initial">${p.name.charAt(0)}</span>
                    <span class="project-card__placeholder-name">${p.name}</span>
                  </div>
                `}
              </div>
              <div class="project-card__body">
                <h3 class="project-card__title">${p.name}</h3>
                ${p.tagline ? `<div class="project-card__tagline">${p.tagline}</div>` : ''}
                <p class="project-card__desc ${isDescMuted ? 'project-card__desc--muted' : ''}">${desc}</p>
                ${p.tags && p.tags.length > 0 ? `
                  <div class="project-card__tags" aria-label="Technologies used for ${p.name}">
                    ${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}
                  </div>
                ` : ''}
                ${hasActions ? `
                  <div class="project-card__actions">
                    ${hasLive ? `
                      <a href="${p.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn--small btn--primary btn--project" aria-label="${p.name} live demo (opens in a new tab)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <span>Live demo</span>
                      </a>
                    ` : ''}
                    ${hasGithub ? `
                      <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn--small btn--outline btn--project" aria-label="${p.name} source code on GitHub (opens in a new tab)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        <span>GitHub</span>
                      </a>
                    ` : ''}
                  </div>
                ` : ''}
                ${(hasGithub || hasLive) ? `
                  <div class="project-card__print-urls" aria-hidden="true">
                    ${hasLive ? `<div class="project-card__print-url">Live: ${p.links.live}</div>` : ''}
                    ${hasGithub ? `<div class="project-card__print-url">GitHub: ${p.links.github}</div>` : ''}
                  </div>
                ` : ''}
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;

  // Attach thumbnail lightbox handlers
  $$("#projects [data-project-idx]").forEach(el => {
    const handleThumbClick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      el.focus();
      const idx = parseInt(el.dataset.projectIdx, 10);
      const project = resumeData.projects[idx];
      if (project && project.image) {
        const src = typeof project.image === 'string' ? project.image : project.image.src;
        const alt = project.image.alt || `${project.name} screenshot`;
        openLightbox([{ src, alt, caption: project.name }], 0, project.name);
      }
    };
    el.addEventListener("click", handleThumbClick);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleThumbClick(e);
      }
    });
  });

  // Ensure portrait screenshots get portrait backdrop class even if cached
  $$("#projects .project-card__img").forEach(img => {
    if (img.complete && img.naturalHeight > img.naturalWidth) {
      img.closest(".project-card__media")?.classList.add("project-card__media--portrait");
    }
  });
}

/* ---- Experience Timeline ---- */

/* Fixed array of English month names so date rendering does not depend on browser locale */
const ENGLISH_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/**
 * Formats a YYYY-MM date string into English "Month Year" (e.g., "October 2026").
 * Uses fixed English month names to avoid locale inconsistencies across browsers.
 */
function formatStartMonthYear(start) {
  if (!start) return "";
  const [yearStr, monthStr] = start.split("-");
  const monthIdx = parseInt(monthStr, 10) - 1;
  const monthName = ENGLISH_MONTHS[monthIdx] || "";
  return `${monthName} ${yearStr}`;
}

/**
 * Calculates duration in months from a given start date (YYYY-MM) to today.
 *
 * INCLUSIVE COUNTING EXPLANATION (for class presentation):
 * Calendar months are counted inclusively: the month in which a role began
 * counts as Month 1 immediately. For instance:
 *   - Starting in October 2026 with today in October 2026 = 1 month (October itself).
 *   - Starting in August 2026 with today in October 2026 = 3 months (August, September, October).
 * Formula: months = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1
 *
 * Rules:
 * - Minimum is 1 month.
 * - Displays "1 month" (singular) vs "N months" (plural).
 * - Displays in total months without converting to years (e.g., "12 months", "13 months").
 */
function getDurationLabel(start) {
  if (!start) return "";
  const [startYearStr, startMonthStr] = start.split("-");
  const startYear = parseInt(startYearStr, 10);
  const startMonth = parseInt(startMonthStr, 10);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-indexed (1 = January, 10 = October)

  const months = Math.max(1, (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1);
  return `${months} ${months === 1 ? "month" : "months"}`;
}

function renderExperience() {
  $("#experience").innerHTML = `
    <div class="container container--experience">
      <div class="section__header reveal">
        <h2 class="section__title">Experience</h2>
        <p class="section__subtitle">Leadership &amp; organizational roles</p>
      </div>
      <div class="timeline" id="timeline">
        ${resumeData.experience.map((exp, i) => {
          const hasPhoto = exp.photos && exp.photos.length > 0;
          const photo = hasPhoto ? exp.photos[0] : null;
          const hasBullets = exp.bullets && exp.bullets.length > 0;
          const startMonthYear = formatStartMonthYear(exp.start);
          const durationLabel = getDurationLabel(exp.start);

          return `
          <div class="timeline__item reveal" data-index="${i}">
            <div class="timeline__dot" aria-hidden="true"></div>
            <div class="timeline__header ${hasBullets ? '' : 'timeline__header--static'}"
                 ${hasBullets ? `role="button" tabindex="0" aria-expanded="false" aria-controls="exp-details-${i}" aria-label="Toggle details for ${exp.role} at ${exp.company}"` : ''}>
              <div class="timeline__logo-wrap">
                <img src="${exp.logo.src}"
                     alt="${exp.logo.alt}"
                     class="timeline__logo"
                     width="88"
                     height="88"
                     loading="lazy"
                     decoding="async"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="timeline__logo-fallback" aria-hidden="true" style="display:none;">${exp.initials}</div>
              </div>
              <div class="timeline__header-content">
                <div class="timeline__role">${exp.role}</div>
                <div class="timeline__company">${exp.company}</div>
                <div class="timeline__date">
                  <span class="timeline__date-range"><time datetime="${exp.start}">${startMonthYear}</time>${exp.ongoing ? " - Present" : ""}</span> <span class="timeline__date-sep" aria-hidden="true">|</span> <span class="timeline__duration">${durationLabel}</span>
                </div>
              </div>
              ${hasBullets ? `
                <div class="timeline__toggle-btn" aria-hidden="true">
                  <svg class="timeline__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              ` : ''}
            </div>
            ${hasBullets ? `
              <div class="timeline__details" id="exp-details-${i}" role="region">
                <div class="timeline__details-inner ${hasPhoto ? 'has-photo' : ''}">
                  <ul class="timeline__bullets">
                    ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
                  </ul>
                  ${hasPhoto ? `
                    <div class="timeline__media">
                      <div class="photo-thumb photo-thumb--timeline" role="button" tabindex="0"
                           data-exp-photo-index="${i}"
                           aria-label="View photo: ${photo.caption}">
                        <img src="${photo.src}" alt="${photo.alt}" class="photo-thumb__img"
                             loading="lazy" decoding="async" width="320" height="240"
                             onerror="handleImageError(this, '${exp.initials || exp.company.slice(0, 3)}', '${exp.company}')">
                        <span class="photo-thumb__badge" aria-hidden="true">
                          ${CAMERA_ICON_SVG}
                          <span>View photo${exp.photos.length > 1 ? `s (${exp.photos.length})` : ''}</span>
                        </span>
                      </div>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}
          </div>
        `;
        }).join("")}
      </div>
    </div>`;

  // Attach timeline photo click handlers (only inside expanded details)
  $$(".photo-thumb--timeline[data-exp-photo-index]").forEach(el => {
    const handleExpPhoto = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const index = parseInt(el.dataset.expPhotoIndex, 10);
      const exp = resumeData.experience[index];
      if (exp && exp.photos && exp.photos.length > 0) {
        openLightbox(exp.photos, 0, exp.company);
      }
    };
    el.addEventListener("click", handleExpPhoto);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleExpPhoto(e);
      }
    });
  });
}

/* ---- Education Section ---- */
function renderEducation() {
  $("#education").innerHTML = `
    <div class="container container--education">
      <div class="section__header reveal">
        <h2 class="section__title">Education</h2>
        <p class="section__subtitle">Academic background, honors, and scholarships</p>
      </div>
      <div class="education__grid">
        ${resumeData.education.map(edu => {
          if (edu.isCombined) {
            return `
              <article class="card education-card education-card--combined reveal">
                <div class="education-card__top">
                  <div class="education-card__logo-wrap">
                    <img src="${edu.logo}"
                         alt="${edu.logoAlt}"
                         class="education-card__logo"
                         width="88"
                         height="88"
                         loading="lazy"
                         decoding="async"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="education-card__logo-fallback" style="display:none;" aria-hidden="true">${edu.fallbackInitials}</div>
                  </div>
                  <div class="education-card__header-text">
                    <div class="education-card__badge-row">
                      <span class="education-card__year">${edu.year}</span>
                    </div>
                    <h3 class="education-card__school">${edu.institution}</h3>
                    <div class="education-card__loc">${edu.location}</div>
                  </div>
                </div>

                <div class="education-card__toggle-row">
                  <span class="text-secondary" style="font-size:0.8125rem;font-weight:600">Junior &amp; Senior High School Levels</span>
                  <button type="button" class="education-card__toggle" id="spnhsToggle"
                          aria-expanded="true" aria-controls="spnhsTimeline"
                          aria-label="Toggle high school timeline levels">
                    <span class="education-card__toggle-text">Hide levels</span>
                    <svg class="education-card__toggle-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                </div>

                <div class="education-timeline" id="spnhsTimeline" role="region" aria-label="Sapang Palay levels timeline">
                  ${edu.levels.map(lvl => `
                    <div class="education-timeline__item">
                      <div class="education-timeline__dot" aria-hidden="true"></div>
                      <div class="education-timeline__header">
                        <span class="education-timeline__level">${lvl.level}</span>
                        <span class="education-timeline__year">${lvl.year}</span>
                      </div>
                      <span class="education-card__honors">${lvl.honors}</span>
                    </div>
                  `).join("")}
                </div>
              </article>
            `;
          }

          if (edu.id === "dost") {
            return `
              <article class="card education-card education-card--scholar reveal">
                <div class="education-card__top">
                  <div class="education-card__logo-wrap">
                    <img src="${edu.logo}"
                         alt="${edu.logoAlt}"
                         class="education-card__logo"
                         width="88"
                         height="88"
                         loading="lazy"
                         decoding="async"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="education-card__logo-fallback" style="display:none;" aria-hidden="true">${edu.fallbackInitials}</div>
                  </div>
                  <div class="education-card__header-text">
                    <div class="education-card__badge-row">
                      <span class="education-card__year">${edu.year}</span>
                    </div>
                    <div class="education-card__title-row">
                      <h3 class="education-card__school">${edu.institution}</h3>
                      ${edu.law ? `<span class="badge badge--scholar">${edu.law}</span>` : ''}
                    </div>
                    <div class="education-card__issuer">Issuer: <strong>${edu.issuer}</strong></div>
                  </div>
                </div>
              </article>
            `;
          }

          // Default: PUP
          return `
            <article class="card education-card reveal">
              <div class="education-card__top">
                <div class="education-card__logo-wrap">
                  <img src="${edu.logo}"
                       alt="${edu.logoAlt}"
                       class="education-card__logo"
                       width="88"
                       height="88"
                       loading="lazy"
                       decoding="async"
                       onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                  <div class="education-card__logo-fallback" style="display:none;" aria-hidden="true">${edu.fallbackInitials}</div>
                </div>
                <div class="education-card__header-text">
                  <div class="education-card__badge-row">
                    <span class="education-card__year">${edu.year}</span>
                  </div>
                  <h3 class="education-card__school">${edu.institution}</h3>
                  <div class="education-card__loc">${edu.location}</div>
                  <div class="education-card__degree">${edu.program}</div>
                </div>
              </div>
              <div class="education-card__footer">
                <span class="education-card__honors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ${edu.honors}
                </span>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </div>`;
}

/* ---- Photo Gallery Section ---- */
function renderGallery() {
  const galleryPhotos = getAllGalleryPhotos();
  $("#gallery").innerHTML = `
    <div class="container">
      <div class="section__header reveal">
        <h2 class="section__title">Photo Gallery</h2>
        <p class="section__subtitle">Highlights from hackathons, competitions, and tech communities</p>
      </div>
      <div class="gallery__grid" id="galleryGrid">
        ${galleryPhotos.map((photo, i) => `
          <article class="gallery-tile reveal" role="button" tabindex="0" data-gallery-idx="${i}" aria-label="View photo: ${photo.caption}">
            <div class="gallery-tile__img-wrap">
              <img src="${photo.src}" alt="${photo.alt}" class="gallery-tile__img"
                   loading="lazy" decoding="async" width="400" height="300"
                   onerror="handleImageError(this, '${photo.eventTitle.slice(0, 3)}', '${photo.eventTitle}')">
              <div class="gallery-tile__overlay">
                <span class="gallery-tile__badge">
                  ${CAMERA_ICON_SVG}
                  <span>View photo</span>
                </span>
                <div class="gallery-tile__info">
                  <span class="gallery-tile__title">${photo.eventTitle}</span>
                  <p class="gallery-tile__caption">${photo.caption}</p>
                </div>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </div>`;

  // Attach gallery tile click handlers
  $$("[data-gallery-idx]").forEach(tile => {
    const handleTileClick = (e) => {
      const idx = parseInt(tile.dataset.galleryIdx, 10);
      openLightbox(galleryPhotos, idx, galleryPhotos[idx].eventTitle);
    };
    tile.addEventListener("click", handleTileClick);
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleTileClick(e);
      }
    });
  });
}

/* Helper to derive handle for social tile */
function getSocialHandle(url, name) {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/+$/, "");
    const parts = path.split("/").filter(Boolean);
    if (!parts.length) return name;
    const last = parts[parts.length - 1];
    if (name.toLowerCase() === "linkedin") return "in/" + last;
    return "@" + last;
  } catch {
    return name;
  }
}

/* ---- Contact Section ---- */
function renderContact() {
  $("#contact").innerHTML = `
    <div class="container container--contact">
      <div class="section__header reveal">
        <h2 class="section__title">Contact</h2>
        <p class="section__subtitle">Let\u2019s build something together</p>
      </div>

      <div class="contact__card-wrapper reveal">
        <div class="contact__card-glow" aria-hidden="true"></div>

        <div class="contact-card">
          <!-- Left Panel: Info, Contact Rows, and Social Tiles -->
          <div class="contact-card__info">
            <div class="contact-info__header">
              <h3 class="contact-heading contact-info__title">Let\u2019s Connect</h3>
              <p class="contact-info__desc">Feel free to reach out for collaborations, projects, or just to say hello.</p>
            </div>

            <div class="contact-rows reveal-stagger">
              <!-- Row 1: Email with copy action -->
              <button type="button" class="contact-row" id="copyEmailBtn" aria-label="Copy email address ${resumeData.email} to clipboard">
                <div class="contact-row__icon-badge" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="contact-row__content">
                  <span class="contact-row__label">Email</span>
                  <span class="contact-row__value">${resumeData.email}</span>
                </div>
                <span class="contact-row__action" aria-hidden="true">Click to copy</span>
              </button>

              <!-- Row 2: Mailto link -->
              <a href="mailto:${resumeData.email}" class="contact-row" aria-label="Send email to ${resumeData.email}">
                <div class="contact-row__icon-badge" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </div>
                <div class="contact-row__content">
                  <span class="contact-row__label">Direct Message</span>
                  <span class="contact-row__value">Email Me</span>
                </div>
                <span class="contact-row__action" aria-hidden="true">Send &rarr;</span>
              </a>

              <!-- Row 3: Phone as tel: link -->
              <a href="tel:${resumeData.phone}" class="contact-row" aria-label="Call ${resumeData.phone}">
                <div class="contact-row__icon-badge" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="contact-row__content">
                  <span class="contact-row__label">Phone</span>
                  <span class="contact-row__value">${resumeData.phone}</span>
                </div>
                <span class="contact-row__action" aria-hidden="true">Call &rarr;</span>
              </a>

              <!-- Row 4: Location -->
              <div class="contact-row contact-row--static" aria-label="Location: San Jose Del Monte, Bulacan">
                <div class="contact-row__icon-badge" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="contact-row__content">
                  <span class="contact-row__label">Location</span>
                  <span class="contact-row__value">San Jose Del Monte, Bulacan</span>
                </div>
                <span class="contact-row__action" aria-hidden="true">Philippines</span>
              </div>
            </div>

            <!-- Social Tiles -->
            <div class="contact-socials">
              <div class="contact-socials__title">Find me online</div>
              <div class="contact-socials__grid">
                ${resumeData.socials.map(s => {
                  const handle = getSocialHandle(s.url, s.name);
                  return `
                  <a href="${s.url}"
                     class="contact-social-tile contact-social-tile--${s.name.toLowerCase()}"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Mark\u2019s ${s.name} profile (opens in a new tab)">
                    <div class="contact-social-tile__icon" aria-hidden="true">${s.svg}</div>
                    <div class="contact-social-tile__body">
                      <span class="contact-social-tile__name">${s.name}</span>
                      <span class="contact-social-tile__handle">${handle}</span>
                    </div>
                  </a>`;
                }).join("")}
              </div>
            </div>
          </div>

          <!-- Right Panel: Message Form -->
          <div class="contact-card__form-panel">
            <div class="contact-form__header">
              <h3 class="contact-heading contact-form__title">Send a Message</h3>
            </div>

            <form id="contactForm" novalidate>
              <div class="form-group form-floating">
                <input class="form-input" type="text" id="formName" name="name"
                       placeholder=" " required autocomplete="name"
                       aria-describedby="formNameError">
                <label class="form-label" for="formName">Name</label>
                <div class="form-error" id="formNameError" role="alert" aria-live="polite">Please enter your name.</div>
              </div>

              <div class="form-group form-floating">
                <input class="form-input" type="email" id="formEmail" name="email"
                       placeholder=" " required autocomplete="email"
                       aria-describedby="formEmailError">
                <label class="form-label" for="formEmail">Email</label>
                <div class="form-error" id="formEmailError" role="alert" aria-live="polite">Please enter a valid email address.</div>
              </div>

              <div class="form-group form-floating">
                <textarea class="form-textarea" id="formMessage" name="message" rows="5"
                          placeholder=" " required minlength="10"
                          aria-describedby="formMessageError messageCharCount"></textarea>
                <label class="form-label" for="formMessage">Message</label>
                <div class="form-meta">
                  <div class="form-error" id="formMessageError" role="alert" aria-live="polite">Message must be at least 10 characters.</div>
                  <span class="form-char-count" id="messageCharCount" aria-live="polite">0 / 10 minimum</span>
                </div>
              </div>

              <button type="submit" class="btn btn--primary btn--send" id="contactSubmitBtn">
                <span class="btn__text">Send Message</span>
                <svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <span class="btn__spinner" aria-hidden="true"></span>
              </button>
            </form>

            <div class="form-success hidden" id="formSuccess" role="status" aria-live="polite">
              <div class="form-success__icon-wrap">
                <svg class="form-success__icon" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                     stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 class="form-success__title">Thanks! Your message has been sent.</h3>
              <p class="form-success__text">Thank you for reaching out. I\u2019ll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

/* ---- Footer ---- */
function renderFooter() {
  const year = new Date().getFullYear();
  $("#footer").innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <p class="footer__text">&copy; ${year} ${resumeData.name}. All rights reserved.</p>
        <p class="footer__text">Built with HTML, CSS &amp; JavaScript.</p>
      </div>
    </div>`;
}


/* ============================================================
   5. THEME MANAGEMENT
   Default to prefers-color-scheme, persist choice in localStorage
   ============================================================ */
function initTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) {
    document.documentElement.setAttribute("data-theme", stored);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
  });
}


/* ============================================================
   6. NAVIGATION — Hamburger, Smooth Scroll, Scroll Spy
   ============================================================ */

/* ---- Hamburger toggle ---- */
function initNavToggle() {
  navToggle.addEventListener("click", toggleMenu);

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close when clicking the backdrop overlay
  navBackdrop.addEventListener("click", closeMenu);
}

function toggleMenu() {
  const isOpen = navMenu.classList.toggle("open");
  navBackdrop.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMenu() {
  navMenu.classList.remove("open");
  navBackdrop.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.style.overflow = "";
}

/* ---- Smooth scrolling + close mobile menu on link click ---- */
function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ---- Scroll spy — highlights current section in nav ---- */
function initScrollSpy() {
  const sections = resumeData.navLinks.map(l => document.querySelector(l.href));
  const links = $$(".nav__link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, {
    rootMargin: "-60px 0px -60% 0px",
    threshold: 0
  });

  sections.forEach(s => { if (s) observer.observe(s); });
}


/* ============================================================
   7. SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";
    scrollProgress.setAttribute("aria-valuenow", Math.round(progress));

    // Sticky header shadow
    header.classList.toggle("scrolled", scrollTop > 10);
  }, { passive: true });
}


/* ============================================================
   8. BACK-TO-TOP BUTTON
   ============================================================ */
function initBackToTop() {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ============================================================
   9. REVEAL-ON-SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initRevealAnimations() {
  const reveals = $$(".reveal, .reveal-stagger");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

  reveals.forEach(el => {
    observer.observe(el);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("revealed");
    }
  });

  // Window scroll fallback to guarantee elements near bottom of page reveal
  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      if (!el.classList.contains("revealed")) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("revealed");
        }
      }
    });
  }, { passive: true });
}


/* ============================================================
   10. COUNT-UP ANIMATION for Highlights
   Animates numbers counting up when the stats strip enters view
   ============================================================ */
function initCountUp() {
  const statEls = $$(".highlight-stat__number[data-count-to]");
  let animated = false;

  // If user prefers reduced motion, leave the initial numbers as rendered
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statEls.forEach(el => animateCount(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  statEls.forEach(el => observer.observe(el));
}

function animateCount(el) {
  const target = parseInt(el.dataset.countTo, 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const duration = 1500; // ms
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  // Start animation from 0 up to target
  el.textContent = prefix + "0" + suffix;
  requestAnimationFrame(update);
}


/* ============================================================
   11. MODAL — Hackathon detail cards
   Accessible: focus trap, Esc to close, click outside to close
   ============================================================ */
let previousFocus = null;

function initModal() {
  // Open modal on card click or Enter/Space (unless photo thumb was clicked)
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-hackathon-photo-id]") || e.target.closest(".photo-thumb")) return;
    const card = e.target.closest(".hackathon-card");
    if (card) openModal(parseInt(card.dataset.hackathonId, 10));
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("[data-hackathon-photo-id]") || e.target.closest(".photo-thumb")) return;
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".hackathon-card")) {
      e.preventDefault();
      openModal(parseInt(e.target.closest(".hackathon-card").dataset.hackathonId, 10));
    }
  });

  // Close
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });
}

function openModal(id) {
  const hackathon = resumeData.hackathons.find(h => h.id === id);
  if (!hackathon) return;

  previousFocus = document.activeElement;

  const getBadgeClass = (cat) => {
    if (cat === "finalist") return "badge--finalist";
    if (cat === "winner") return "badge--winner";
    return "badge--qualifier";
  };

  const hasPhoto = hackathon.photos && hackathon.photos.length > 0;
  const photo = hasPhoto ? hackathon.photos[0] : null;

  modalContent.innerHTML = `
    ${hasPhoto ? `
      <div class="modal__photo-wrap" role="button" tabindex="0" id="modalPhotoTrigger" aria-label="View photo in lightbox">
        <img src="${photo.src}" alt="${photo.alt}" class="modal__photo-img" loading="lazy" decoding="async">
        <div class="modal__photo-overlay">
          <span class="photo-thumb__badge">
            ${CAMERA_ICON_SVG}
            <span>Click to view in lightbox</span>
          </span>
        </div>
      </div>
    ` : ''}
    <span class="badge ${getBadgeClass(hackathon.category)}" style="margin-bottom:0.75rem;display:inline-block">${hackathon.result}</span>
    <h3 class="modal__title" id="modalTitle">${hackathon.title}</h3>
    <div class="modal__meta">${hackathon.org} &bull; ${hackathon.date}</div>
    ${hackathon.theme ? `<div class="modal__theme">"${hackathon.theme}"</div>` : ''}
    <ul class="modal__bullets">
      ${hackathon.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>`;

  if (hasPhoto) {
    const photoTrigger = $("#modalPhotoTrigger");
    if (photoTrigger) {
      const openPhoto = (e) => {
        e.stopPropagation();
        openLightbox(hackathon.photos, 0, hackathon.title);
      };
      photoTrigger.addEventListener("click", openPhoto);
      photoTrigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPhoto(e);
        }
      });
    }
  }

  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalEl.focus();

  // Focus trap
  bindFocusTrap(modalEl);
}

let modalTrapListener = null;

function bindFocusTrap(container) {
  if (modalTrapListener) {
    container.removeEventListener("keydown", modalTrapListener);
  }
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  modalTrapListener = function(e) {
    if (e.key !== "Tab") return;
    const focusables = container.querySelectorAll(focusableSelectors);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  container.addEventListener("keydown", modalTrapListener);
}

function closeModal() {
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (modalTrapListener) {
    modalEl.removeEventListener("keydown", modalTrapListener);
    modalTrapListener = null;
  }
  if (previousFocus) previousFocus.focus();
}


/* ============================================================
   12B. LIGHTBOX MODAL
   Accessible image viewer: controls, counter, caption, Esc, arrows, swipe
   ============================================================ */
let currentLightboxList = [];
let currentLightboxIndex = 0;
let previousLightboxFocus = null;
let lightboxTrapListener = null;

function initLightbox() {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", lightboxPrevPhoto);
  lightboxNext.addEventListener("click", lightboxNextPhoto);

  // Close when clicking outside of image stage
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightboxOverlay.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        lightboxPrevPhoto();
      } else if (e.key === "ArrowRight") {
        lightboxNextPhoto();
      }
    }
  });

  // Touch swipe on lightbox stage
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  lightboxMedia.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  lightboxMedia.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        lightboxNextPhoto();
      } else {
        lightboxPrevPhoto();
      }
    }
  }, { passive: true });
}

function openLightbox(photoList, initialIndex = 0, defaultTitle = '') {
  if (!photoList || photoList.length === 0) return;
  currentLightboxList = photoList.map(p => ({
    ...p,
    eventTitle: p.eventTitle || defaultTitle
  }));
  currentLightboxIndex = Math.max(0, Math.min(initialIndex, currentLightboxList.length - 1));
  previousLightboxFocus = document.activeElement;

  updateLightboxView();

  lightboxOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();

  bindLightboxFocusTrap(lightbox);
}

function updateLightboxView() {
  const photo = currentLightboxList[currentLightboxIndex];
  if (!photo) return;

  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt || "Photo";
  lightboxTitle.textContent = photo.eventTitle || "";
  lightboxCaption.textContent = photo.caption || "";

  if (currentLightboxList.length > 1) {
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
    lightboxCounter.style.display = "inline-block";
    lightboxPrev.style.display = "flex";
    lightboxNext.style.display = "flex";
    lightboxPrev.removeAttribute("disabled");
    lightboxNext.removeAttribute("disabled");
  } else {
    lightboxCounter.style.display = "none";
    lightboxPrev.style.display = "none";
    lightboxNext.style.display = "none";
  }
}

function lightboxNextPhoto() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxView();
}

function lightboxPrevPhoto() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxView();
}

function closeLightbox() {
  lightboxOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lightboxTrapListener) {
    lightbox.removeEventListener("keydown", lightboxTrapListener);
    lightboxTrapListener = null;
  }

  // Clear image source after transition
  setTimeout(() => {
    if (lightboxOverlay.getAttribute("aria-hidden") === "true") {
      lightboxImg.src = "";
    }
  }, 250);

  if (previousLightboxFocus && typeof previousLightboxFocus.focus === "function") {
    previousLightboxFocus.focus();
  }
}

function bindLightboxFocusTrap(container) {
  if (lightboxTrapListener) {
    container.removeEventListener("keydown", lightboxTrapListener);
  }
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  lightboxTrapListener = function(e) {
    if (e.key !== "Tab") return;
    const focusables = Array.from(container.querySelectorAll(focusableSelectors)).filter(el => {
      return el.offsetParent !== null && !el.disabled && el.style.display !== "none";
    });
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  container.addEventListener("keydown", lightboxTrapListener);
}



/* ============================================================
   14. EXPERIENCE TIMELINE — Expand / Collapse
   ============================================================ */
function initTimelineToggle() {
  const items = $$(".timeline__item");

  items.forEach(item => {
    const headerBtn = item.querySelector(".timeline__header[role='button']");
    const details = item.querySelector(".timeline__details");
    if (!headerBtn || !details) return; // Compact entry without bullets; skip

    const detailsInner = details.querySelector(".timeline__details-inner");
    if (!detailsInner) return;

    headerBtn.addEventListener("click", () => {
      const isExpanded = item.classList.contains("expanded");

      if (isExpanded) {
        details.style.maxHeight = "0";
        item.classList.remove("expanded");
        headerBtn.setAttribute("aria-expanded", "false");
      } else {
        details.style.maxHeight = detailsInner.scrollHeight + "px";
        item.classList.add("expanded");
        headerBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Keyboard support
    headerBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        headerBtn.click();
      }
    });
  });
}

/* ---- Sapang Palay Levels Expand / Collapse ---- */
function initEducationToggle() {
  const toggleBtn = $("#spnhsToggle");
  const timeline = $("#spnhsTimeline");
  if (!toggleBtn || !timeline) return;

  const toggle = () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;
    toggleBtn.setAttribute("aria-expanded", String(nextState));
    timeline.setAttribute("aria-hidden", String(!nextState));
    const label = toggleBtn.querySelector(".education-card__toggle-text");
    if (label) {
      label.textContent = nextState ? "Hide levels" : "Show levels";
    }
  };

  toggleBtn.addEventListener("click", toggle);
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
}


/* ============================================================
   15. PRINT BUTTON
   ============================================================ */
function initPrintButton() {
  const btn = $("#printBtn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.print();
    });
  }
}


/* ============================================================
   16. CONTACT ACTIONS — Copy Email, Tel, Mailto
   ============================================================ */
function initContactActions() {
  const copyBtn = $("#copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(resumeData.email);
        showToast("Email copied to clipboard!");
      } catch {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = resumeData.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("Email copied to clipboard!");
      }
    });
  }
}


/* ============================================================
   17. TOAST NOTIFICATION
   ============================================================ */
function showToast(message, duration = 3000) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, duration);
}


/* ============================================================
   18. CONTACT FORM — Real-time validation & simulated submit
   ============================================================ */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  const fields = {
    name: {
      input: $("#formName"),
      error: $("#formNameError"),
      validate: (val) => val.trim().length > 0
    },
    email: {
      input: $("#formEmail"),
      error: $("#formEmailError"),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
    },
    message: {
      input: $("#formMessage"),
      error: $("#formMessageError"),
      validate: (val) => val.trim().length >= 10
    }
  };

  const charCounter = $("#messageCharCount");
  const submitBtn = $("#contactSubmitBtn");
  const successEl = $("#formSuccess");

  // Character counter for message field
  if (fields.message.input && charCounter) {
    const updateCharCount = () => {
      const len = fields.message.input.value.trim().length;
      charCounter.textContent = `${len} / 10 minimum`;
      charCounter.classList.toggle("form-char-count--valid", len >= 10);
    };
    fields.message.input.addEventListener("input", updateCharCount);
  }

  // Real-time validation on blur and input
  Object.values(fields).forEach(field => {
    if (!field.input || !field.error) return;
    field.input.addEventListener("blur", () => validateField(field));
    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("error")) {
        validateField(field);
      }
    });
  });

  function validateField(field) {
    const isValid = field.validate(field.input.value);
    field.input.classList.toggle("error", !isValid);
    field.error.classList.toggle("visible", !isValid);
    return isValid;
  }

  let resetTimer = null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = true;
    let firstInvalid = null;

    Object.values(fields).forEach(field => {
      if (!validateField(field)) {
        allValid = false;
        if (!firstInvalid) firstInvalid = field.input;
      }
    });

    if (!allValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Submit loading state
    if (submitBtn) {
      submitBtn.classList.add("loading");
      submitBtn.setAttribute("disabled", "true");
      const btnText = submitBtn.querySelector(".btn__text");
      if (btnText) btnText.textContent = "Sending...";
    }

    setTimeout(() => {
      form.classList.add("hidden");
      if (successEl) successEl.classList.remove("hidden");
      showToast("Thanks! Your message has been sent.");

      form.reset();
      if (charCounter) {
        charCounter.textContent = "0 / 10 minimum";
        charCounter.classList.remove("form-char-count--valid");
      }
      Object.values(fields).forEach(f => {
        if (f.input) f.input.classList.remove("error");
        if (f.error) f.error.classList.remove("visible");
      });

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        if (successEl) successEl.classList.add("hidden");
        form.classList.remove("hidden");
        if (submitBtn) {
          submitBtn.classList.remove("loading");
          submitBtn.removeAttribute("disabled");
          const btnText = submitBtn.querySelector(".btn__text");
          if (btnText) btnText.textContent = "Send Message";
        }
      }, 4500);
    }, 650);
  });
}


/* ============================================================
   19. VIEWPORT INDICATOR (dev tool)
   Toggled with Shift+D keyboard shortcut
   ============================================================ */
function initViewportBadge() {
  function updateBadge() {
    const w = window.innerWidth;
    let bp = "base (<576px)";
    if (w >= 1200) bp = "xl (≥1200px)";
    else if (w >= 992) bp = "lg (≥992px)";
    else if (w >= 768) bp = "md (≥768px)";
    else if (w >= 576) bp = "sm (≥576px)";
    viewportBadge.textContent = `${w}px \u2022 ${bp}`;
  }

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "D") {
      viewportBadge.classList.toggle("hidden");
      updateBadge();
    }
  });

  window.addEventListener("resize", () => {
    if (!viewportBadge.classList.contains("hidden")) {
      updateBadge();
    }
  }, { passive: true });
}
