export default {
  mounted(el) {
    // Elementin başlangıç durumunu ayarlıyoruz.
    el.classList.add('fade-init')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fade-in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
  },
}
