// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// //without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(ScrollTrigger);

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(ScrollTrigger);




import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';


let Argonath = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 1000 ),
	loader: new GLTFLoader(),
	model1: null,
	model2: null,
	// model2: null,
	renderer: new THREE.WebGLRenderer({ antialiasing: true, alpha: true, })
}
Argonath.camera.position.z = 5;
Argonath.camera.position.y = -0.5;


Argonath.loader.load( '../3d_models/argonath/scene.gltf', function ( gltf ) {
	Argonath.model1 = gltf.scene
	Argonath.model1.rotation.y = 2
	Argonath.model1.position.set(2, 0, -10.2)
	Argonath.scene.add( gltf.scene );
	// Argonath.model1.scale.set(3, 3, 3)
}, undefined, function ( error ) {

	console.error( error );

} );

Argonath.loader.load( '../3d_models/argonath/scene.gltf', function ( gltf ) {
	Argonath.model2 = gltf.scene
	Argonath.model2.rotation.y = 2.8
	Argonath.model2.position.set(-8.5, 0, -5.2)
	Argonath.scene.add( gltf.scene );
	
}, undefined, function ( error ) {

	console.error( error );

} );

gsap.to(Argonath.camera.position,{
	scrollTrigger: {
		trigger: '.argonath',
		start: 'top center',
		end: 'bottom center',
		markers: false,
		scrub: 2,
	},
	y: -10,
	z: -20
})

gsap.to(Argonath.camera.rotation,{
	scrollTrigger: {
		trigger: '.argonath',
		start: 'top center',
		end: 'bottom center',
		markers: false,
		scrub: 2,
	},
	x: 1,
})

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0,0,0)
Argonath.scene.add( cube );

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
Argonath.scene.add(ambientLight);

// const MinasDirectionalLight = new THREE.DirectionalLight(0xffffff, 100);
// MinasDirectionalLight.target.position.set(0, 0, 0);
// MinasDirectionalLight.position.set(2, 0, 0);
// MinasScene.add(MinasDirectionalLight);


Argonath.renderer.setPixelRatio(window.devicePixelRatio);
let MinasContainerWidth = document.querySelector('.minas-container').clientWidth
let MinasContainerHeight = document.querySelector('.minas-container').clientHeight
console.log(MinasContainerHeight * ( window.innerWidth / window.innerHeight), MinasContainerHeight)
Argonath.renderer.setSize( document.querySelector('.argonath-container').clientWidth, window.innerHeight );
document.querySelector('.argonath-container').appendChild( Argonath.renderer.domElement );

// function animate() {
// 	requestAnimationFrame( animate );
//     // Minas.rotation.y += 0.01;
// 	Minas.renderer.render( Minas.scene, Minas.camera );
// }
// animate();

export { Argonath }