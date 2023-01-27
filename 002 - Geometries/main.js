// Import three.js
import * as THREE from 'three'
import { IcosahedronGeometry } from 'three'

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
	const material = new THREE.MeshBasicMaterial({ color: 'red' })
	//
	const BoxGeometry = new THREE.BoxGeometry(1, 1)
	const Box = new THREE.Mesh(BoxGeometry, material)
	scene.add(Box)

	const CapsuleGeometry = new THREE.CapsuleGeometry(1, 1, 10, 20)
	const Capsule = new THREE.Mesh(CapsuleGeometry, material)
	Capsule.position.set(2.5, 0, 0)
	scene.add(Capsule)

	const CircleGeometry = new THREE.CircleGeometry(1, 32)
	const Circle = new THREE.Mesh(CircleGeometry, material)
	Circle.position.set(-2.5, 0, 0)
	scene.add(Circle)

	const ConeGeometry = new THREE.ConeGeometry(1, 2, 8, 1)
	const Cone = new THREE.Mesh(ConeGeometry, material)
	Cone.position.set(-5, 0, 0)
	scene.add(Cone)

	const CylinderGeometry = new THREE.CylinderGeometry(1, 1, 4, 16)
	const Cylinder = new THREE.Mesh(CylinderGeometry, material)
	Cylinder.position.set(5, 0, 0)
	scene.add(Cylinder)

	const DodecahedronGeometry = new THREE.DodecahedronGeometry(1, 1)
	const Dodecahedron = new THREE.Mesh(DodecahedronGeometry, material)
	Dodecahedron.position.set(7.5, 0, 0)
	scene.add(Dodecahedron)

	const IcosahedronGeometry = new THREE.IcosahedronGeometry(1)
	const Icosahedron = new THREE.Mesh(IcosahedronGeometry, material)
	Icosahedron.position.set(-7.5, 0, 0)
	scene.add(Icosahedron)

	const LatheGeometry = new THREE.LatheGeometry((0, 0.5), 30)
	const Lathe = new THREE.Mesh(LatheGeometry, material)
	Lathe.position.set(10, 0, 0)
	scene.add(Lathe)

	const OctahedronGeometry = new THREE.OctahedronGeometry(1, 2)
	const Octahedron = new THREE.Mesh(OctahedronGeometry, material)
	Octahedron.position.set(0, 0, -2.5)
	scene.add(Octahedron)

	const PlaneGeometry = new THREE.PlaneGeometry(1, 1)
	const Plane = new THREE.Mesh(PlaneGeometry, material)
	Plane.position.set(2.5, 0, -2.5)
	scene.add(Plane)

	const RingGeometry = new THREE.RingGeometry(2, 2, 32, 1)
	const Ring = new THREE.Mesh(RingGeometry, material)
	Ring.position.set(-2.5, 0, -2.5)
	scene.add(Ring)

	const SphereGeometry = new THREE.SphereGeometry(1, 32, 16)
	const Sphere = new THREE.Mesh(SphereGeometry, material)
	Sphere.position.set(-5, 0, -2.5)
	scene.add(Sphere)

	const TetrahedronGeometry = new THREE.TetrahedronGeometry(1, 0)
	const Tetrahedron = new THREE.Mesh(TetrahedronGeometry, material)
	Tetrahedron.position.set(5, 0, -2.5)
	scene.add(Tetrahedron)

	const TorusGeometry = new THREE.TorusGeometry(1, 1, 16, 100)
	const Torus = new THREE.Mesh(TorusGeometry, material)
	const TorusKnotGeometry = new THREE.TorusKnotGeometry(1, 0.3, 64, 8, 2, 3)
	const TorusKnot = new THREE.Mesh(TorusKnotGeometry, material)
}

function animate() {
	//Animate!
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
