const contactStep = document.querySelector('.contact-step')
const enterpriseStep = document.querySelector('.enterprise-step')
const projectStep = document.querySelector('.project-step')
const buttonContact = document.querySelector('.contact-step-cta button')
const enterpriseBack = document.querySelector('.enterprise-step-cta-back')
const enterpriseContinue = document.querySelector('.enterprise-step-cta-continue')
const projectBack = document.querySelector('.project-step-cta-back')

buttonContact.addEventListener('click', () => {
    contactStep.style.display = "none"
    enterpriseStep.style.display = "block"
})

enterpriseBack.addEventListener('click', () => {
    contactStep.style.display = "block"
    enterpriseStep.style.display = "none"
})

enterpriseContinue.addEventListener('click', () => {
    enterpriseStep.style.display = "none"
    projectStep.style.display = "block"
})

projectBack.addEventListener('click', () => {
    enterpriseStep.style.display = "block"
    projectStep.style.display = "none"
})