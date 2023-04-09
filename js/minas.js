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


let Minas = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
	loader: new GLTFLoader(),
	model: null,
	renderer: new THREE.WebGLRenderer({ antialiasing: true, alpha: true, })
}
Minas.camera.position.z = 5;
Minas.camera.position.y = -0.5;



Minas.loader.load( '../3d_models/minas_tirith/scene.gltf', function ( gltf ) {
	console.log(gltf)
	Minas.model = gltf.scene
	Minas.scene.add( gltf.scene );
	Minas.model.scale.set(36, 36, 36)

	gsap.to(Minas.model.rotation,{
		scrollTrigger: {
			trigger: '.minas-tirith',
			start: 'top center',
			end: 'bottom center',
			markers: false,
			scrub: 2,
		},
		y: -3
	})
	gsap.to(Minas.model.scale,{
		scrollTrigger: {
			trigger: '.minas-tirith',
			start: 'top center',
			end: 'bottom center',
			markers: false,
			scrub: 2,
		},
		x: 48,
		y: 48,
		z: 48,
	})
	gsap.to(Minas.camera.position,{
		scrollTrigger: {
			trigger: '.minas-tirith',
			start: 'top center',
			end: 'bottom center',
			markers: flase,
			scrub: 2,
		},
		y: 0.5,
	})

}, undefined, function ( error ) {

	console.error( error );

} );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const ambientLight = new THREE.AmbientLight(0xffffff, 100);
// MinasScene.add(ambientLight);

// const MinasDirectionalLight = new THREE.DirectionalLight(0xffffff, 100);
// MinasDirectionalLight.target.position.set(0, 0, 0);
// MinasDirectionalLight.position.set(2, 0, 0);
// MinasScene.add(MinasDirectionalLight);


Minas.renderer.setPixelRatio(window.devicePixelRatio);
let MinasContainerWidth = document.querySelector('.minas-container').clientWidth
let MinasContainerHeight = document.querySelector('.minas-container').clientHeight
console.log(MinasContainerHeight * ( window.innerWidth / window.innerHeight), MinasContainerHeight)
Minas.renderer.setSize( MinasContainerHeight * ( window.innerWidth / window.innerHeight), MinasContainerHeight );
document.querySelector('.minas-container').appendChild( Minas.renderer.domElement );

export { Minas }