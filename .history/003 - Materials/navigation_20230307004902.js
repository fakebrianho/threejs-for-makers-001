import gsap from 'gsap'
let names = [
	'Mesh Basic',
	'Mesh Standard',
	'Mesh Lambert',
	'Mesh Phong',
	'Toon Material',
	'Points Material',
]
let count = 0

export const nav = (camera) => {
	const previous = document.querySelector('.previous')
	const next = document.querySelector('.next')

	previous.addEventListener('click', () => {
		if (count > 0) {
			count--
			let currX = camera.position.x
			if (!animationState) {
				gsap.to(camera.position, {
					x: currX - 10,
					duration: 1,
					onStart: function () {
						animationState = true
					},
					onComplete: function () {
						animationState = false
					},
				})
				update()
			}
		}
	})
	next.addEventListener('click', () => {
		if (count < 5) {
			count++
			let currX = camera.position.x
			if (!animationState) {
				gsap.to(camera.position, {
					x: currX - 10,
					duration: 1,
					onStart: function () {
						animationState = true
					},
					onComplete: function () {
						animationState = false
					},
				})
				update()
			}
		}
	})
}

function update() {
	const mat = document.querySelector('h1')
	mat.innerHTML = names[count]
}
export const resize = (camera, renderer, sizes) => {
	window.addEventListener('resize', () => {
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()
	})
}
