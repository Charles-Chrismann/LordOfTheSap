import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

import { Minas } from './minas';
import { Argonath } from './argonath';
import { Ring } from './ring';

console.log(Argonath)
console.log(Argonath.model1)
console.log(Argonath.model2)

function animate() {
	requestAnimationFrame( animate );
	// Minas.rotation.y += 0.01;
	Minas.renderer.render( Minas.scene, Minas.camera );
	Ring.model.rotation.y += 0.005
	Ring.model.rotation.x += 0.005
	Ring.renderer.render( Ring.scene, Ring.camera );

	Argonath.renderer.render( Argonath.scene, Argonath.camera );
}


// .intro-container .appear-disappear span:nth-of-type(1)
console.log(document.querySelector('.ff'))
let homeTl = gsap.timeline()
homeTl.to(".intro-container .appear-disappear span:nth-of-type(1)",
	{
		opacity: 1,
		duration: 1,
	},
)
.to(".intro-container .appear-disappear span:nth-of-type(1)", { opacity: 0, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(2)", { opacity: 1, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(2)", { opacity: 0, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(3)", { opacity: 1, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(3)", { opacity: 0, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(4)", { opacity: 1, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(4)", { opacity: 0, duration: 1, delay: 1})
.to(".intro-container .appear-disappear span:nth-of-type(5)", { opacity: 1, duration: 1, delay: 1})
.to(".intro-container .rings p:nth-child(1)", { opacity: 1, duration: 1, delay: 2})

gsap.to(".intro-container .rings p:nth-child(1)", {
	scrollTrigger: {
		trigger: ".intro-container .rings p:nth-child(1)",
		start: 'top 80%'
	},
	opacity: 1,
	duration: 2
})

gsap.from(".intro-container .rings img:nth-of-type(1)", {
	scrollTrigger: {
		trigger: ".intro-container .rings img:nth-of-type(1)",
		start: 'top center'
	},
	opacity: 0,
	duration: 1,
	y: '50%',
})

gsap.to(".intro-container .rings p:nth-of-type(2)", {
	scrollTrigger: {
		trigger: ".intro-container .rings p:nth-of-type(2)",
		start: '-64px center'
	},
	opacity: 1,
	duration: 2
})

gsap.from(".intro-container .rings img:nth-of-type(2)", {
	scrollTrigger: {
		trigger: ".intro-container .rings img:nth-of-type(2)",
		start: 'top center'
	},
	opacity: 0,
	duration: 1,
	y: '50%',
})

gsap.to(".intro-container .rings p:nth-of-type(3)", {
	scrollTrigger: {
		trigger: ".intro-container .rings p:nth-of-type(3)",
		start: '-64px center'
	},
	opacity: 1,
	duration: 2
})

gsap.from(".intro-container .rings img:nth-of-type(3)", {
	scrollTrigger: {
		trigger: ".intro-container .rings img:nth-of-type(3)",
		start: 'top center'
	},
	opacity: 0,
	duration: 1,
	y: '50%',
})

gsap.to(".intro-container .rings p:nth-of-type(4)", {
	scrollTrigger: {
		trigger: ".intro-container .rings p:nth-of-type(4)",
		start: '-64px center'
	},
	opacity: 1,
	duration: 2
})

gsap.to(".intro-container .rings p:nth-of-type(5)", {
	scrollTrigger: {
		trigger: ".intro-container .rings p:nth-of-type(5)",
		start: 'top center'
	},
	opacity: 1,
	duration: 2
})

let uniqueTl = gsap.timeline({ scrollTrigger: {
	trigger: 'unique-ring'
} })
uniqueTl.to(".unique-ring p:nth-child(1)",
	{
		
	}
)


animate();