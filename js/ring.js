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


let Ring = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera( 75, 100 / 100, 0.1, 1000 ),
	loader: new GLTFLoader(),
	model: null,
	renderer: new THREE.WebGLRenderer({ antialiasing: true, alpha: true, })
}
Ring.camera.position.z = 5;
Ring.camera.position.y = -0.5;


Ring.loader.load( '../3d_models/ring/scene.gltf', function ( gltf ) {
	Ring.model = gltf.scene
	Ring.model.position.set(0, 0, 0)
	// Ring.model.rotation.x = 2.5
	Ring.model.scale.set(8, 8, 8)
	Ring.scene.add( gltf.scene );
}, undefined, function ( error ) {

	console.error( error );

} );



// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// cube.position.set(0,0,0)
// Ring.scene.add( cube );

// const ambientLight = new THREE.AmbientLight(0xffffff, 200);
// Ring.scene.add(ambientLight);

const MinasDirectionalLight = new THREE.DirectionalLight(0xffffff, 250);
console.log(MinasDirectionalLight.target)
// MinasDirectionalLight.target.position.set(0, -4000, 0);
MinasDirectionalLight.position.set(2, 3, 2);
Ring.scene.add(MinasDirectionalLight);

console.log(window.devicePixelRatio)
Ring.renderer.setPixelRatio(window.devicePixelRatio * 2);
Ring.renderer.setSize( 100, 100 );
document.querySelector('.ring-container').appendChild( Ring.renderer.domElement );

export { Ring }