// Import three.js
import * as THREE from 'three'

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
	controls()
	addShapes()
	animate()
}

function controls() {
	//Add controls to our scene
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.enableDamping = true
}

function addShapes() {
	//Create the components for our mesh then form our mesh
	const geometry = new THREE.BoxGeometry(1, 1)
	const material = new THREE.MeshBasicMaterial({ color: 'red' })
	const mesh = new THREE.Mesh(geometry, material)
	//Add our mesh to our scene
	scene.add(mesh)
}

function animate() {
	//Animate!
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
