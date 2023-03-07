// Import three.js
import * as THREE from 'three'
import { IcosahedronGeometry } from 'three'
import { nav } from './navigation'
// After version 148 Orbit Controls need to be exported separately
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//The three things we need in every project, a camera, renderer and scene
//Camera takes 4 parameters (field of view, aspect ratio, near frustum, far frustum)
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

//Our scene where everything in THREE.js lives within
const scene = new THREE.Scene()

//What we're going to use to render everything in our scene to the screen
const renderer = new THREE.WebGLRenderer()

init()
function init() {
	//Everything in THREE.js is instantiated at 0,0,0 so it's easy to accidentally stack the camera inside our objects.
	camera.position.set(0, 0, 5)
	//Boiler plate renderer settings to make sure our canvas is the right size and to make sure it ends up in our html
	document.body.appendChild(renderer.domElement)
	renderer.setSize(window.innerWidth, window.innerHeight)
	nav()
	controls()
	addShapes()
	addLights()
	animate()
}

function addLights() {
	const directionalLight = new THREE.DirectionalLight('0x000000', 0.5)
	directionalLight.position.set(0, 3, 3)
	scene.add(directionalLight)
	const directionalLight2 = new THREE.DirectionalLight('0x000000', 0.35)
	directionalLight2.position.set(3, 6, 3)
	scene.add(directionalLight2)
	const directionalLight3 = new THREE.DirectionalLight('0x000000', 0.2)
	directionalLight3.position.set(-3, -1, -1)
	scene.add(directionalLight3)
}

function controls() {
	//Add controls to our scene
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.enableDamping = true
}

function addShapes() {
	//Create the components for our mesh then form our mesh
	const material = new THREE.MeshBasicMaterial({ color: 'red' })
	const standard = new THREE.MeshStandardMaterial({
		color: 'red',
		metalness: 1,
		roughness: 0.3,
	})
	const lambert = new THREE.MeshLambertMaterial({})
	const phong = new THREE.MeshPhongMaterial({
		specular: 0xffffff,
		shininess: 30,
	})
	const toon = new THREE.MeshToonMaterial({})
	const points = new THREE.PointsMaterial()
	const tourus = new THREE.TorusKnotGeometry(1, 0.3, 128, 8, 2, 3)

	const t1 = new THREE.Mesh(tourus, material)
	t1.position.set(0, 0, 0)
	scene.add(t1)

	const t2 = new THREE.Mesh(tourus, standard)
	t2.position.set(10.0, 0, 0)
	scene.add(t2)

	const t3 = new THREE.Mesh(tourus, lambert)
	t3.position.set(20.0, 0, 0)
	scene.add(t3)

	const t4 = new THREE.Mesh(tourus, phong)
	t4.position.set(30.0, 0, 0)
	scene.add(t4)

	const t5 = new THREE.Mesh(tourus, toon)
	t5.position.set(40.0, 0, 0)
	scene.add(t5)

	const t6 = new THREE.Mesh(tourus, points)
	t6.position.set(50.0, 0, 0)
	scene.add(t6)
}

function animate() {
	//Animate!
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

let first = [1, 2, 3]

let sumOfNum = (a, b, c) => {
	return a + b + c
}

console.log(sumOfNum(...first))
