import { TweenMax, Power3 } from 'gsap'
import $ from 'jquery'

const ease = Power3.easeOut

export const introPageTransition = node => {
  if (node) {
    TweenMax.fromTo(
      node,
      0.35,
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0px)', ease, delay: 0.4 }
    )
  }
}

export const outroPageTransition = node => {
  // find how much the page is scrolled
  const doc = document.documentElement
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

  // if the page is scrolled more than 100px, scroll back to the top
  if (top > 100) {
    $('html, body').animate(
      {
        scrollTop: $('body').offset().top
      },
      350
    )
  }

  if (node) {
    TweenMax.fromTo(
      node,
      0.35,
      { opacity: 1, transform: 'translateY(0px)' },
      { opacity: 0, transform: 'translateY(20px)', ease }
    )
  }
}
