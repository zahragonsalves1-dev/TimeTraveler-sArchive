/* ==========================================================================
   CONTENT DATA
   --------------------------------------------------------------------------
   This is the file to edit when you want to add a new article or project.
   Copy an existing object inside the array, change the values, and save —
   the Writing and Projects pages read from these arrays automatically.

   Notes:
   - "id" should be a short, unique catalog-style code. Any format works;
     the examples below follow a simple YEAR.SEQUENCE pattern.
   - "date" should be in "Month YYYY" format for display.
   - "sortDate" should be an ISO-ish string (YYYY-MM) so items can be
     sorted/newest-first automatically. Keep it in sync with "date".
   - Leave "href" as "#" until the article or project has its own page,
     or point it at a PDF / external link / a page you've built.
   ========================================================================== */

const ARTICLES = [
  {
    id: "W.2026.01",
    title: "What a Reading Room Teaches You Before You Read Anything",
    description:
      "An early reflection on quiet, order, and attention — and what university reading rooms have to do with how research actually gets done.",
    category: "Library Science",
    date: "January 2026",
    sortDate: "2026-01",
    readTime: "6 min read",
    href: "#",
    excerptOnly: true
  },
  {
    id: "W.2025.04",
    title: "Cataloging as Interpretation, Not Just Order",
    description:
      "Placeholder essay idea: how the choices behind a classification system quietly shape what a researcher is able to find — and what stays invisible.",
    category: "Archives",
    date: "November 2025",
    sortDate: "2025-11",
    readTime: "8 min read",
    href: "#",
    excerptOnly: true
  },
  {
    id: "W.2025.03",
    title: "Notes on a Special Collections Visit",
    description:
      "Placeholder reflection on handling primary sources for the first time as an undergraduate, and what it changed about how I read secondary sources.",
    category: "Archives",
    date: "October 2025",
    sortDate: "2025-10",
    readTime: "5 min read",
    href: "#",
    excerptOnly: true
  },
  {
    id: "W.2025.02",
    title: "The Museum Label as a Small Act of Translation",
    description:
      "Placeholder essay on exhibition text — how a few sentences on a wall mediate between an object, a curator, and a visitor who may know nothing about either.",
    category: "Museums",
    date: "August 2025",
    sortDate: "2025-08",
    readTime: "7 min read",
    href: "#",
    excerptOnly: true
  },
  {
    id: "W.2025.01",
    title: "Toward an Islamic Library: An Early Sketch",
    description:
      "Placeholder for a longer-term writing project — early, personal notes toward the idea of building a library and museum devoted to Islamic cultural heritage.",
    category: "Islamic Heritage",
    date: "May 2025",
    sortDate: "2025-05",
    readTime: "9 min read",
    href: "#",
    excerptOnly: true
  },
  {
    id: "W.2024.02",
    title: "Why I Want to Be a Librarian, Not Just Work in a Library",
    description:
      "Placeholder personal essay distinguishing the profession of librarianship — its ethics, its history, its public purpose — from the more familiar image of the library as a building.",
    category: "Library Science",
    date: "October 2024",
    sortDate: "2024-10",
    readTime: "6 min read",
    href: "#",
    excerptOnly: true
  }
];

const PROJECTS = [
  {
    id: "P.2026.01",
    title: "Undergraduate Research Project",
    role: "Researcher",
    date: "Spring 2026",
    sortDate: "2026-01",
    category: "Historical Research",
    description:
      "Placeholder — replace with a short description of a research project: your question, your method, and what you produced (paper, presentation, dataset, exhibit).",
    learned:
      "Placeholder — what you learned methodologically or substantively.",
    skills: ["Archival research", "Historical analysis", "Academic writing"],
    href: "#"
  },
  {
    id: "P.2025.03",
    title: "Digital Humanities / Cataloging Project",
    role: "Contributor",
    date: "Fall 2025",
    sortDate: "2025-09",
    category: "Digital Humanities",
    description:
      "Placeholder — describe a digital humanities, metadata, or cataloging project: a collection you helped describe, a database you contributed to, or a digital exhibit you built.",
    learned:
      "Placeholder — tools or standards used (e.g. Dublin Core, Omeka, TEI) and what the experience clarified about descriptive work.",
    skills: ["Metadata", "Digital exhibits", "Collections description"],
    href: "#"
  },
  {
    id: "P.2025.02",
    title: "Community Literacy Initiative",
    role: "Volunteer",
    date: "2025",
    sortDate: "2025-03",
    category: "Literacy & Education",
    description:
      "Placeholder — describe a literacy, tutoring, or community education project. Who did it serve, what was your role, and what did it involve week to week.",
    learned:
      "Placeholder — what the experience taught you about access, education, or public-facing library work.",
    skills: ["Tutoring", "Program support", "Community outreach"],
    href: "#"
  },
  {
    id: "P.2024.01",
    title: "Student Organization Involvement",
    role: "Member",
    date: "2024 – Present",
    sortDate: "2024-09",
    category: "Student Involvement",
    description:
      "Placeholder — name the organization (a history society, library student association, museum club, etc.) and describe your involvement.",
    learned:
      "Placeholder — leadership, collaboration, or subject-matter skills gained.",
    skills: ["Collaboration", "Event planning"],
    href: "#"
  }
];

const EXPERIENCE = [
  {
    role: "Position Title — Placeholder",
    org: "Organization / Department, Temple University",
    date: "Month Year – Present",
    sortDate: "2026-01",
    description:
      "Placeholder description of responsibilities and the kind of library, archival, museum, or research work involved. Replace with real, specific detail once available."
  },
  {
    role: "Position Title — Placeholder",
    org: "Organization Name",
    date: "Month Year – Month Year",
    sortDate: "2025-06",
    description:
      "Placeholder description. Keep entries concise — one or two sentences on what you did and what it involved."
  },
  {
    role: "Position Title — Placeholder",
    org: "Organization Name",
    date: "Month Year – Month Year",
    sortDate: "2024-09",
    description:
      "Placeholder description of an earlier volunteer, research, or student role relevant to libraries, archives, museums, or education."
  }
];

const BOOKS = [
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "Currently reading",
    tag: "Currently Reading"
  },
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "A book that shaped how I think about archives and memory.",
    tag: "Influential"
  },
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "On the history of libraries as institutions.",
    tag: "Library History"
  },
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "Recommended reading on Islamic manuscript culture.",
    tag: "Islamic Heritage"
  },
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "On museums, objects, and public interpretation.",
    tag: "Museums"
  },
  {
    title: "Title Placeholder",
    author: "Author Name",
    note: "A history text relevant to current coursework.",
    tag: "Currently Reading"
  }
];
