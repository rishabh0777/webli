// hooks/useScrollSpy.js
import { useEffect } from "react";

export default function useScrollSpy(setActiveSection) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);

              // ✅ Update URL hash without reload
              window.history.replaceState(null, "", `#${id}`);

              // ✅ Update document title
              const title = id.charAt(0).toUpperCase() + id.slice(1);
              document.title = `Webli | ${title}`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection]);
}
