(function () {
  var config = window.SITE_CONFIG || { links: [] };

  // Simple line icons, 24×24, drawn with the current text color.
  var ICONS = {
    spotify:
      '<circle cx="12" cy="12" r="9.5"/><path d="M7 9.6c3.4-1 7.1-.7 10.1 1"/><path d="M7.6 12.7c2.7-.8 5.7-.5 8.1.9"/><path d="M8.3 15.6c2.1-.6 4.2-.4 6 .7"/>',
    applemusic:
      '<path d="M9 17.5V6.2l10-2v11.3"/><circle cx="6.6" cy="17.5" r="2.4"/><circle cx="16.6" cy="15.5" r="2.4"/>',
    youtube:
      '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.2 9.4v5.2l4.4-2.6z" fill="currentColor" stroke="none"/>',
    instagram:
      '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none"/>',
    tiktok:
      '<path d="M14 3.5v11a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3.5c.4 2.6 2.3 4.4 5 4.7"/>',
    kick:
      '<path d="M5 4h4v5h2V7h2V5h4v4h-2v2h-2v2h2v2h2v4h-4v-2h-2v-2h-2v5H5z"/>',
    soundcloud:
      '<path d="M7 17.5h10.6a3.6 3.6 0 0 0 .3-7.2 5.2 5.2 0 0 0-10-1.1A4.2 4.2 0 0 0 7 17.5z"/>',
    audiomack:
      '<path d="M4 13.5v-3M8 16V8M12 19V5M16 15.5v-7M20 13.5v-3"/>',
    x:
      '<path d="M5 4.5l14 15M19 4.5l-14 15"/>',
    link:
      '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
  };

  function isActive(link) {
    return link && typeof link.url === "string" && /^https?:\/\/\S+$/i.test(link.url.trim());
  }

  function isSoon(link) {
    return link && typeof link.url === "string" && link.url.trim().toLowerCase() === "soon";
  }

  function icon(name) {
    var paths = ICONS[name] || ICONS.link;
    return (
      '<svg class="link__icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      paths + "</svg>"
    );
  }

  function render() {
    var list = document.getElementById("links");
    if (!list) return;

    var active = (config.links || []).filter(function (l) { return isActive(l) || isSoon(l); });
    list.innerHTML = "";

    active.forEach(function (link) {
      var li = document.createElement("li");
      var soon = isSoon(link);
      var a = document.createElement(soon ? "div" : "a");
      a.className = soon ? "link link--soon" : "link";
      if (!soon) {
        a.href = link.url.trim();
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.innerHTML = icon(link.platform) + '<span class="link__label"></span>' +
        (soon ? '<span class="link__note">Coming soon</span>' : "");
      a.querySelector(".link__label").textContent = link.label || link.platform;
      li.appendChild(a);
      list.appendChild(li);
    });

    list.hidden = active.length === 0;

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
