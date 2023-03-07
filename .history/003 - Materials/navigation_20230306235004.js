import gsap from 'gsap'
export const nav = (camera) => {
	const previous = document.querySelector('.previous')
	const next = document.querySelector('.next')

	previous.addEventListener('click', () => {
		let currX = camera.position.x
		gsap.to(camera.position, { x: currX - 10, duration: 1 })
	})
	next.addEventListener('click', () => {
		let currX = camera.position.x
		gsap.to(camera.position, { x: currX + 10, duration: 1 })
	})
}
