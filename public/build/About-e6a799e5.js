
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, C as fade, e as element, b as space, c as attr_dev, f as add_location, g as insert_dev, h as append_dev, n as noop, D as add_render_callback, E as create_bidirectional_transition, j as detach_dev } from './vendor-54bac80a.js';

/* src/routes/About.svelte generated by Svelte v3.45.0 */
const file = "src/routes/About.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let h10;
	let t1;
	let p0;
	let t3;
	let h11;
	let t5;
	let p1;
	let t7;
	let h12;
	let t9;
	let p2;
	let t11;
	let h13;
	let t13;
	let p3;
	let div1_transition;
	let current;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h10 = element("h1");
			h10.textContent = "What is Lorem Ipsum?";
			t1 = space();
			p0 = element("p");
			p0.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n      Lorem Ipsum has been the industry's standard dummy text ever since the\n      1500s, when an unknown printer took a galley of type and scrambled it to\n      make a type specimen book. It has survived not only five centuries, but\n      also the leap into electronic typesetting, remaining essentially\n      unchanged. It was popularised in the 1960s with the release of Letraset\n      sheets containing Lorem Ipsum passages, and more recently with desktop\n      publishing software like Aldus PageMaker including versions of Lorem\n      Ipsum.";
			t3 = space();
			h11 = element("h1");
			h11.textContent = "Where does it come from?";
			t5 = space();
			p1 = element("p");
			p1.textContent = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has\n      roots in a piece of classical Latin literature from 45 BC, making it over\n      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney\n      College in Virginia, looked up one of the more obscure Latin words,\n      consectetur, from a Lorem Ipsum passage, and going through the cites of\n      the word in classical literature, discovered the undoubtable source. Lorem\n      Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et\n      Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This\n      book is a treatise on the theory of ethics, very popular during the\n      Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit\n      amet..\", comes from a line in section 1.10.32.";
			t7 = space();
			h12 = element("h1");
			h12.textContent = "Why do we use it?";
			t9 = space();
			p2 = element("p");
			p2.textContent = "It is a long established fact that a reader will be distracted by the\n      readable content of a page when looking at its layout. The point of using\n      Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n      as opposed to using 'Content here, content here', making it look like\n      readable English. Many desktop publishing packages and web page editors\n      now use Lorem Ipsum as their default model text, and a search for 'lorem\n      ipsum' will uncover many web sites still in their infancy. Various\n      versions have evolved over the years, sometimes by accident, sometimes on\n      purpose (injected humour and the like).";
			t11 = space();
			h13 = element("h1");
			h13.textContent = "Where can I get some?";
			t13 = space();
			p3 = element("p");
			p3.textContent = "There are many variations of passages of Lorem Ipsum available, but the\n      majority have suffered alteration in some form, by injected humour, or\n      randomised words which don't look even slightly believable. If you are\n      going to use a passage of Lorem Ipsum, you need to be sure there isn't\n      anything embarrassing hidden in the middle of text. All the Lorem Ipsum\n      generators on the Internet tend to repeat predefined chunks as necessary,\n      making this the first true generator on the Internet. It uses a dictionary\n      of over 200 Latin words, combined with a handful of model sentence\n      structures, to generate Lorem Ipsum which looks reasonable. The generated\n      Lorem Ipsum is therefore always free from repetition, injected humour, or\n      non-characteristic words etc.";
			attr_dev(h10, "class", "text-red-500 text-3xl mb-8");
			add_location(h10, file, 6, 4, 140);
			attr_dev(p0, "class", "mb-12");
			add_location(p0, file, 7, 4, 209);
			attr_dev(h11, "class", "text-red-500 text-3xl mb-8");
			add_location(h11, file, 18, 4, 869);
			attr_dev(p1, "class", "mb-12");
			add_location(p1, file, 19, 4, 942);
			attr_dev(h12, "class", "text-red-500 text-3xl mb-8");
			add_location(h12, file, 32, 4, 1803);
			attr_dev(p2, "class", "mb-12");
			add_location(p2, file, 33, 4, 1869);
			attr_dev(h13, "class", "text-red-500 text-3xl mb-8");
			add_location(h13, file, 44, 4, 2568);
			attr_dev(p3, "class", "mb-12");
			add_location(p3, file, 45, 4, 2638);
			attr_dev(div0, "class", "container py-12 px-4");
			add_location(div0, file, 5, 2, 101);
			attr_dev(div1, "class", "page");
			add_location(div1, file, 4, 0, 64);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h10);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(div0, t3);
			append_dev(div0, h11);
			append_dev(div0, t5);
			append_dev(div0, p1);
			append_dev(div0, t7);
			append_dev(div0, h12);
			append_dev(div0, t9);
			append_dev(div0, p2);
			append_dev(div0, t11);
			append_dev(div0, h13);
			append_dev(div0, t13);
			append_dev(div0, p3);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fade, {}, true);
				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fade, {}, false);
			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching && div1_transition) div1_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('About', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ fade });
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export { About as default };
//# sourceMappingURL=About-e6a799e5.js.map
