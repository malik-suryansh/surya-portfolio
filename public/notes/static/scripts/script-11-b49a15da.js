
    document.addEventListener("nav", () => {
      const base = document.body.dataset.basepath || ""
      document.querySelectorAll("a[href]").forEach(a => {
        const href = a.getAttribute("href")
        if (!href || href.startsWith("http") || href.startsWith("#") || /\.[^/]+$/.test(href)) return
        const resolved = new URL(href, window.location.href).pathname
        if (!resolved.startsWith(base + "/") && resolved !== base) return
        if (document.querySelector(`link[rel="prefetch"][href="${resolved}"]`)) return
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = resolved
        document.head.appendChild(link)
      })
    })
  