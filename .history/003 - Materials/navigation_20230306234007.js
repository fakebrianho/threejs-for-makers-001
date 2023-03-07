import gsap from 'gsap'
export const nav = (camera) => {
	const previous = document.querySelector('.previous')
	const next = document.querySelector('.next')
	console.log(previous)
	console.log(next)

	previous.addEventListener('click', () => {
		let currX = camera.position.x
		gsap.to(camera.position, { x: currX - 10, duration: 1 })
		alert('previous')
	})
	next.addEventListener('click', () => {
		alert('next')
	})
}
