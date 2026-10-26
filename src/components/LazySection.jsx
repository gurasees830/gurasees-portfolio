import { Suspense, useEffect, useRef, useState } from "react";

// After the section has loaded, go back to it if the address of the page asks for it.
// The placeholder and the real section can have different heights, so the first jump
// can end a little away from the target.
function Landed({ id }) {
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    }
  }, [id]);
  return null;
}

// Shows an empty placeholder until the section is close to the screen,
// and only then downloads and renders the code of the section.
function LazySection({ id, component: Section, minHeight = 600, rootMargin = "400px 0px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(true); // very old browsers: just load the section
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect(); // it only needs to load once
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div id={id} ref={ref} className="lazy-wrap" style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && (
        <Suspense fallback={<div className="section-loading" style={{ minHeight }}>Loading...</div>}>
          <Section />
          <Landed id={id} />
        </Suspense>
      )}
    </div>
  );
}

export default LazySection;
