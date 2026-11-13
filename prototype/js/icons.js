// Ikon garis 24px, gaya konsisten (stroke 2, ujung bulat). Tanpa emoji sebagai antarmuka.
const P = {
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
  ear: '<path d="M6 9a6 6 0 1 1 11 3.3c-1.2 1.6-2.5 2.3-2.5 4.2a3 3 0 0 1-5.5 1.6"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0"/>',
  script: '<path d="M5 5h14M5 12h9M5 19h14"/><path d="M17 10l2 2-2 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  play: '<path d="M8 5.5v13l11-6.5-11-6.5Z"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  send: '<path d="M4 12l16-8-6 16-3-7-7-1Z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
  home: '<path d="M4 11l8-7 8 7v9H4v-9Z"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3Z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
  gate: '<path d="M4 20V8l8-4 8 4v12M9 20v-6h6v6"/>',
  wifi: '<path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10 10 0 0 1 13 0M8.8 16a5 5 0 0 1 6.4 0M12 19.5h.01"/>',
  wifiOff: '<path d="M3 3l18 18M2.5 9a15 15 0 0 1 4-2.4M10 5.2a15 15 0 0 1 11.5 3.8M5.5 12.5a10 10 0 0 1 3-1.8M13.5 11a10 10 0 0 1 5 1.5M8.8 16a5 5 0 0 1 3.2-1.2M12 19.5h.01"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  undo: '<path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  volume: '<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',
  pen: '<path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19l-4 1Z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  file: '<path d="M7 3h7l5 5v13H7V3Z"/><path d="M14 3v5h5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  chev: '<path d="M9 5l7 7-7 7"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  book: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2V5Z"/><path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8V5Z"/>',
  leaf: '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z"/><path d="M5 19l8-8"/>',
};
export function icon(name, size = 24, cls = "") {
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
}
export function hydrate(root = document) {
  root.querySelectorAll("[data-ic]").forEach((el) => {
    el.innerHTML = icon(el.dataset.ic, +(el.dataset.size || 24));
  });
}
