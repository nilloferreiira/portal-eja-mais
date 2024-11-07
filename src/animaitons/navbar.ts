import gsap from "gsap"
// import { sections } from "../db/data"

function open() {
  gsap.context(() => {
    gsap
      .timeline()
      .fromTo(
        "#navlinks",
        { height: 0 },
        { height: "auto", duration: 0.4, ease: "power2.out" }
      )
      .fromTo(
        "#cursos",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        "#enem",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )
      .fromTo(
        "#bem-estar",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )
      .fromTo(
        "#noticias",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )
      .fromTo(
        "#vocacao",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )
      .fromTo(
        "#produtividade",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )
  }, "#navbar")

  return gsap.killTweensOf("#navbar")
}

function close() {
  return new Promise<void>((resolve) => {
    gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            resolve()
          }
        })
        .to("#cursos", { opacity: 0, y: -20, duration: 0.3 }, "-=0.2")
        .to("#enem", { opacity: 0, y: -20, duration: 0.3 }, "-=0.2")
        .to("#bem-estar", { opacity: 0, y: -20, duration: 0.3 }, "-=0.2")
        .to("#noticias", { opacity: 0, y: -20, duration: 0.3 }, "-=0.2")
        .to("#vocacao", { opacity: 0, y: -20, duration: 0.3 }, "-=0.2")
        .to("#produtividade", { opacity: 0, y: -20, duration: 0.3 }, "-=0.3")
        .to("#navlinks", { height: 0, duration: 0.5, ease: "power2.out" })
    }, "#navbar")

    return gsap.killTweensOf("#navbar")
  })
}

export const navBarAnimation = { open, close }
