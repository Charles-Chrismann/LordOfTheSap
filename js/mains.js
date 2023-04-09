// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// //without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(ScrollTrigger);

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

let ring;

const loader = new GLTFLoader();

loader.load( '../3d_models/ring/scene.gltf', function ( gltf ) {
	console.log(gltf)
	ring = gltf.scene
	scene.add( gltf.scene );
	ring.scale.set(0.05, 0.05, 0.05)

}, undefined, function ( error ) {

	console.error( error );

} );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const ambientLight = new THREE.AmbientLight(0xffffff, 100);
// scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.target.position.set(0, 0, 0);
directionalLight.position.set(0, 0, 2);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer({ antialiasing: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
	ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();