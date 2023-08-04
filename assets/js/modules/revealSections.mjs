export default function (sections) {
  const revealSections = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSections, {
    root: null,
    threshold: 0.2,
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });
}
