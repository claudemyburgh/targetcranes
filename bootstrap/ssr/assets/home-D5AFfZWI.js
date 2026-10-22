import { i as SwipeTitle, n as SectionLabel, r as SwipeLine, s as Wrapper, t as AppLayout } from "./app-layout-w-LVHpQd.js";
import { t as Seo } from "./seo-BhlX0amy.js";
import { t as DotPattern } from "./dot-pattern-CGhAmuU_.js";
import { t as siteStats } from "./site-stats-B-HyFZiV.js";
import { t as ScrollDivider } from "./scroll-divider-DKzPqdoI.js";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Anchor, Award, ClipboardCheck, Clock, Compass, HardHat, Pickaxe, ShieldCheck, Truck, Wind } from "lucide-react";
// resources/images/hero-4k-16x9.webp
var hero_4k_16x9_default = "/build/assets/hero-4k-16x9-CHbFFFcj.webp";
// resources/js/components/LightRays.tsx
var PIXEL_BUDGET = 24e5;
var MAX_PULSES = 4;
var ORIGINS = {
	"top-left": {
		anchor: [0, -.2],
		dir: [0, 1]
	},
	"top-center": {
		anchor: [.5, -.2],
		dir: [0, 1]
	},
	"top-right": {
		anchor: [1, -.2],
		dir: [0, 1]
	},
	left: {
		anchor: [-.2, .5],
		dir: [1, 0]
	},
	right: {
		anchor: [1.2, .5],
		dir: [-1, 0]
	},
	"bottom-left": {
		anchor: [0, 1.2],
		dir: [0, -1]
	},
	"bottom-center": {
		anchor: [.5, 1.2],
		dir: [0, -1]
	},
	"bottom-right": {
		anchor: [1, 1.2],
		dir: [0, -1]
	}
};
var VERTEX = `#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`;
var FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uScale;
uniform float uTime;
uniform vec2 uSource;
uniform vec2 uAim;
uniform float uReach;
uniform vec3 uColor;
uniform float uSpread;
uniform float uLength;
uniform float uFade;
uniform float uSaturation;
uniform float uPulsating;
uniform float uNoise;
uniform float uDistortion;
uniform float uDensity;
uniform float uSharpness;
uniform float uGlow;
uniform float uHaze;
uniform float uAtmosphere;
uniform float uIntensity;
uniform vec4 uShadow;
uniform vec4 uPulses[${MAX_PULSES}];
uniform vec2 uIntro;
uniform float uLight;
uniform float uOpacity;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), w.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), w.x), w.y);
}

float shape(float strength, float width) {
  float edge = max(mix(0.5, 0.08, uSharpness), width);
  return mix(strength, smoothstep(0.62 - edge, 0.62 + edge, strength), uSharpness);
}

void main() {
  vec2 coord = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y) / uScale;
  vec2 delta = coord - uSource;
  float distance = length(delta);
  vec2 dir = delta / max(distance, 1e-4);
  float cosAngle = dot(dir, uAim);
  float angle = cosAngle + uDistortion * sin(uTime * 2.0 + distance * 0.02) * 0.2;
  float slope = fwidth(angle);
  float depth = distance / uReach;

  float source = exp(-depth * depth * 9.0) * 0.9 + exp(-depth * 3.2) * 0.25;
  float glowLight = uGlow * source * smoothstep(-0.2, 0.6, cosAngle);
  float spread = pow(max(angle, 0.0), 1.0 / uSpread);
  float lengthFalloff = clamp(1.0 - distance / (uReach * uLength), 0.0, 1.0);
  float fadeFalloff = clamp(1.0 - distance / (uReach * uFade), 0.5, 1.0);
  float envelope = spread * lengthFalloff * fadeFalloff;
  float reveal = uIntensity * uIntro.y * (1.0 - smoothstep(uIntro.x - 0.35, uIntro.x, depth));
  if ((envelope * 1.6 + glowLight) * reveal < 0.0015) {
    fragColor = vec4(0.0);
    return;
  }

  float phaseA = angle * 36.2214 * uDensity + uTime * 1.5;
  float phaseB = -angle * 21.11349 * uDensity + uTime * 1.5;
  float phaseC = angle * 22.3991 * uDensity + uTime * 1.1;
  float phaseD = -angle * 18.0234 * uDensity + uTime * 1.1;
  float strengthA = clamp(0.75 + 0.15 * sin(phaseA) + 0.2 * cos(phaseB), 0.0, 1.0);
  float strengthB = clamp(0.75 + 0.15 * sin(phaseC) + 0.2 * cos(phaseD), 0.0, 1.0);
  float widthA = abs(0.15 * 36.2214 * cos(phaseA) + 0.2 * 21.11349 * sin(phaseB)) * uDensity * slope;
  float widthB = abs(0.15 * 22.3991 * cos(phaseC) + 0.2 * 18.0234 * sin(phaseD)) * uDensity * slope;
  float pulseA = uPulsating > 0.5 ? 0.8 + 0.2 * sin(uTime * 4.5) : 1.0;
  float pulseB = uPulsating > 0.5 ? 0.8 + 0.2 * sin(uTime * 3.3) : 1.0;
  float rayLight = envelope * (0.5 * shape(strengthA, widthA) * pulseA + 0.4 * shape(strengthB, widthB) * pulseB);

  if (uHaze > 0.0) {
    float around = atan(uAim.x * dir.y - uAim.y * dir.x, cosAngle);
    vec2 drift = vec2(around * 2.2 + uTime * 0.035, depth * 2.6 - uTime * 0.11);
    float fog = 0.65 * valueNoise(drift * vec2(3.0, 1.0)) + 0.35 * valueNoise(drift * vec2(7.0, 2.3) + 4.1);
    rayLight *= mix(1.0, 0.25 + 1.2 * fog, uHaze);
  }

  if (uShadow.z > 0.0) {
    vec2 toCursor = uShadow.xy - uSource;
    float cursorDistance = length(toCursor);
    float along = dot(delta, toCursor) / max(cursorDistance * cursorDistance, 1e-4);
    float side = abs(delta.x * toCursor.y - delta.y * toCursor.x) / max(cursorDistance, 1e-4);
    float trail = max(along - 1.0, 0.0);
    float width = uShadow.w * along + 0.22 * trail * cursorDistance;
    float behind = smoothstep(0.97, 1.25, along) * exp(-trail * 1.1);
    float shade = (1.0 - smoothstep(width * 0.3, width * 1.6, side)) * behind;
    rayLight *= 1.0 - uShadow.z * 0.62 * shade;
  }

  float boost = 0.0;
  for (int i = 0; i < ${MAX_PULSES}; i++) {
    vec4 wave = uPulses[i];
    if (wave.z <= 0.0) continue;
    float x = (depth - wave.x) / wave.y;
    boost += wave.z * exp(-x * x);
  }
  float light = (rayLight * (1.0 + boost) + glowLight) * reveal;

  if (uNoise > 0.0) {
    float n = fract(sin(dot(coord * 0.02 + uTime * 0.1, vec2(12.9898, 78.233))) * 43758.5453123);
    light *= 1.0 - uNoise + uNoise * n;
  }

  float near = clamp(1.2 - distance / (uResolution.y / uScale), 0.0, 1.0);
  vec3 tint = mix(vec3(0.9), vec3(0.1, 0.3, 0.5) + near * vec3(0.8, 0.6, 0.5), uAtmosphere);
  float gray = dot(tint, vec3(0.299, 0.587, 0.114));
  vec3 hue = max(mix(vec3(gray), tint, uSaturation), 0.0) * uColor;

  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  if (uLight > 0.5) {
    vec3 color = hue * light;
    float energy = max(color.r, max(color.g, color.b));
    vec3 tone = clamp(1.0 - (1.0 - hue / max(max(hue.r, max(hue.g, hue.b)), 1e-4)) * 1.8, 0.0, 1.0);
    float warm = clamp((min(tone.r, tone.g) - tone.b) * 2.0, 0.0, 1.0);
    vec3 ink = tone * (mix(0.66, 0.94, warm) - 0.1 * smoothstep(0.4, 1.2, energy));
    float density = clamp(0.82 * (1.0 - exp(-1.5 * energy * energy)) * uOpacity + grain, 0.0, 1.0);
    fragColor = vec4(ink * density, density);
    return;
  }
  float level = light < 0.75 ? light : 0.75 + 0.25 * (1.0 - exp(-(light - 0.75) / 0.25));
  float top = max(hue.r, max(hue.g, hue.b));
  hue = mix(hue, vec3(top), smoothstep(0.8, 1.0, level) * 0.45);
  vec3 shown = clamp(hue * level, 0.0, 1.0) * level;
  fragColor = vec4(clamp(shown + grain, 0.0, level) * uOpacity, level * uOpacity);
}`;
var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
var parseColor = (value) => {
	const text = String(value || "").trim();
	const hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(text);
	if (hex) {
		const full = hex[1].length === 3 ? hex[1].replace(/./g, (digit) => digit + digit) : hex[1];
		return [
			0,
			2,
			4
		].map((index) => parseInt(full.slice(index, index + 2), 16) / 255);
	}
	const rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(text);
	if (rgb) return [
		rgb[1],
		rgb[2],
		rgb[3]
	].map((channel) => clamp(parseFloat(channel) / 255, 0, 1));
	return null;
};
var compile = (gl, type, source) => {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
};
var link = (gl) => {
	const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
	const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
	const program = vertex && fragment ? gl.createProgram() : null;
	if (!vertex || !fragment || !program) {
		if (vertex) gl.deleteShader(vertex);
		if (fragment) gl.deleteShader(fragment);
		return null;
	}
	gl.attachShader(program, vertex);
	gl.attachShader(program, fragment);
	gl.linkProgram(program);
	gl.deleteShader(vertex);
	gl.deleteShader(fragment);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error(gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
		return null;
	}
	const uniforms = {};
	const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	for (let index = 0; index < count; index++) {
		const info = gl.getActiveUniform(program, index);
		if (info) uniforms[info.name.replace(/\[0\]$/, "")] = gl.getUniformLocation(program, info.name);
	}
	return {
		program,
		uniforms
	};
};
var smoother = (t) => {
	const x = clamp(t, 0, 1);
	return x * x * x * (x * (x * 6 - 15) + 10);
};
var LightRays = ({ raysOrigin = "top-center", raysColor = "#ffffff", raysSpeed = 1, lightSpread = .5, rayLength = 3, rayDensity = 1, tilt = 0, raySharpness = .35, glow = .6, haze = .25, atmosphere = 1, intensity = 1, pulsating = false, fadeDistance = 1, saturation = 1, followMouse = true, mouseInfluence = .1, cursorShadow = true, clickPulse = true, noiseAmount = 0, distortion = 0, intro = true, lightMode = false, opacity = 1, maxDevicePixelRatio = 2, className = "", style }) => {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const wakeRef = useRef(null);
	const [generation, setGeneration] = useState(0);
	const settings = {
		origin: ORIGINS[raysOrigin] || ORIGINS["top-center"],
		color: parseColor(raysColor) || [
			1,
			1,
			1
		],
		speed: Math.max(0, raysSpeed),
		spread: Math.max(.001, lightSpread),
		length: Math.max(.01, rayLength),
		density: clamp(rayDensity, .1, 6),
		tilt: clamp(tilt, -90, 90) * Math.PI / 180,
		sharpness: clamp(raySharpness, 0, 1),
		glow: Math.max(0, glow),
		haze: clamp(haze, 0, 1),
		atmosphere: clamp(atmosphere, 0, 1),
		intensity: Math.max(0, intensity),
		pulsating,
		fade: Math.max(.01, fadeDistance),
		saturation: Math.max(0, saturation),
		follow: followMouse,
		influence: clamp(mouseInfluence, 0, 1),
		cursorShadow,
		clickPulse,
		noise: clamp(noiseAmount, 0, 1),
		distortion,
		intro,
		light: lightMode,
		opacity: clamp(opacity, 0, 1),
		maxRatio: clamp(maxDevicePixelRatio, .5, 3)
	};
	const settingsRef = useRef(settings);
	settingsRef.current = settings;
	useEffect(() => {
		wakeRef.current?.();
	});
	useEffect(() => {
		const container = containerRef.current;
		const canvas = canvasRef.current;
		if (!container || !canvas) return;
		const gl = canvas.getContext("webgl2", {
			alpha: true,
			premultipliedAlpha: true,
			antialias: false,
			depth: false,
			stencil: false,
			powerPreference: "high-performance"
		});
		const shader = gl ? link(gl) : null;
		if (!gl || !shader) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const vao = gl.createVertexArray();
		const size = {
			width: 1,
			height: 1,
			ratio: 1
		};
		const pointer = {
			x: .5,
			y: .5,
			inside: false,
			seen: false
		};
		const aim = {
			x: .5,
			y: .5
		};
		const shade = {
			x: .5,
			y: .5,
			presence: 0
		};
		const pulses = [];
		const pulseData = /* @__PURE__ */ new Float32Array(16);
		let time = 0;
		let opening = settingsRef.current.intro && !reduced && generation === 0 ? 0 : 1;
		let raf = 0;
		let last = 0;
		let visible = true;
		let pageVisible = document.visibilityState !== "hidden";
		let lost = false;
		const resize = () => {
			const s = settingsRef.current;
			const rect = container.getBoundingClientRect();
			const cssWidth = Math.max(1, rect.width);
			const cssHeight = Math.max(1, rect.height);
			const detail = s.density * (.35 + .65 * s.sharpness);
			const sampling = Math.max(clamp(.35 + .3 * detail, .5, 2), s.noise > 0 ? 1 : 0);
			const ratio = Math.min(window.devicePixelRatio || 1, s.maxRatio, sampling, Math.sqrt(PIXEL_BUDGET / (cssWidth * cssHeight)));
			const width = Math.max(1, Math.round(cssWidth * ratio));
			const height = Math.max(1, Math.round(cssHeight * ratio));
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
			}
			size.width = cssWidth;
			size.height = cssHeight;
			size.ratio = width / cssWidth;
		};
		const frame = (now) => {
			raf = 0;
			if (lost) return;
			const s = settingsRef.current;
			const dt = clamp((now - last) / 1e3 || 0, 0, .05);
			last = Math.max(last, now);
			time += dt * s.speed * (reduced ? .35 : 1);
			if (opening < 1) opening = Math.min(1, opening + dt / 1.8);
			const steer = 1 - Math.exp(-dt / .2);
			const aimX = s.follow && pointer.seen ? pointer.x : .5;
			const aimY = s.follow && pointer.seen ? pointer.y : .5;
			aim.x += (aimX - aim.x) * steer;
			aim.y += (aimY - aim.y) * steer;
			const glide = 1 - Math.exp(-dt / .08);
			shade.x += (pointer.x - shade.x) * glide;
			shade.y += (pointer.y - shade.y) * glide;
			const shading = pointer.inside && s.cursorShadow && !reduced;
			shade.presence += ((shading ? 1 : 0) - shade.presence) * (1 - Math.exp(-dt / (shading ? .25 : .5)));
			for (let index = pulses.length - 1; index >= 0; index--) {
				pulses[index].age += dt;
				if (pulses[index].age >= 2) pulses.splice(index, 1);
			}
			pulseData.fill(0);
			pulses.forEach((pulse, index) => {
				const t = pulse.age;
				pulseData[index * 4] = .05 + t * 1.05;
				pulseData[index * 4 + 1] = .14 + t * .14;
				pulseData[index * 4 + 2] = .9 * smoother(t / .15) * (1 - smoother(t / 2));
			});
			const width = size.width;
			const height = size.height;
			const sourceX = s.origin.anchor[0] * width;
			const sourceY = s.origin.anchor[1] * height;
			const cos = Math.cos(s.tilt);
			const sin = Math.sin(s.tilt);
			let dirX = s.origin.dir[0] * cos - s.origin.dir[1] * sin;
			let dirY = s.origin.dir[0] * sin + s.origin.dir[1] * cos;
			if (s.follow && s.influence > 0) {
				const mx = aim.x * width - sourceX;
				const my = aim.y * height - sourceY;
				const ml = Math.hypot(mx, my) || 1;
				const bx = dirX + (mx / ml - dirX) * s.influence;
				const by = dirY + (my / ml - dirY) * s.influence;
				const bl = Math.hypot(bx, by) || 1;
				dirX = bx / bl;
				dirY = by / bl;
			}
			const eased = 1 - Math.pow(1 - opening, 3);
			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.clearColor(0, 0, 0, 0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.useProgram(shader.program);
			gl.bindVertexArray(vao);
			const u = shader.uniforms;
			gl.uniform2f(u.uResolution, canvas.width, canvas.height);
			gl.uniform1f(u.uScale, size.ratio);
			gl.uniform1f(u.uTime, time);
			gl.uniform2f(u.uSource, sourceX, sourceY);
			gl.uniform2f(u.uAim, dirX, dirY);
			gl.uniform1f(u.uReach, Math.max(width, height));
			gl.uniform3f(u.uColor, s.color[0], s.color[1], s.color[2]);
			gl.uniform1f(u.uSpread, s.spread);
			gl.uniform1f(u.uLength, s.length);
			gl.uniform1f(u.uFade, s.fade);
			gl.uniform1f(u.uSaturation, s.saturation);
			gl.uniform1f(u.uPulsating, s.pulsating ? 1 : 0);
			gl.uniform1f(u.uNoise, s.noise);
			gl.uniform1f(u.uDistortion, s.distortion);
			gl.uniform1f(u.uDensity, s.density);
			gl.uniform1f(u.uSharpness, s.sharpness);
			gl.uniform1f(u.uGlow, s.glow);
			gl.uniform1f(u.uHaze, s.haze);
			gl.uniform1f(u.uAtmosphere, s.atmosphere);
			gl.uniform1f(u.uIntensity, s.intensity);
			gl.uniform4f(u.uShadow, shade.x * width, shade.y * height, shade.presence, 16);
			gl.uniform4fv(u.uPulses, pulseData);
			gl.uniform2f(u.uIntro, eased * 2.6, smoother(opening / .5));
			gl.uniform1f(u.uLight, s.light ? 1 : 0);
			gl.uniform1f(u.uOpacity, s.opacity);
			gl.drawArrays(gl.TRIANGLES, 0, 3);
			const settling = Math.abs(aim.x - aimX) > 1e-4 || Math.abs(aim.y - aimY) > 1e-4 || shade.presence > .001 && Math.abs(shade.x - pointer.x) + Math.abs(shade.y - pointer.y) > 1e-4 || Math.abs((shading ? 1 : 0) - shade.presence) > .001 || pulses.length > 0;
			if ((s.speed > 0 || opening < 1 || settling) && visible && pageVisible) raf = requestAnimationFrame(frame);
		};
		const wake = () => {
			if (raf || lost || !visible || !pageVisible) return;
			last = performance.now();
			raf = requestAnimationFrame(frame);
		};
		wakeRef.current = () => {
			resize();
			wake();
		};
		const locate = (event) => {
			const rect = container.getBoundingClientRect();
			return {
				x: (event.clientX - rect.left) / Math.max(1, rect.width),
				y: (event.clientY - rect.top) / Math.max(1, rect.height),
				inside: event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom
			};
		};
		const onPointerMove = (event) => {
			const spot = locate(event);
			if (!pointer.inside && spot.inside) {
				shade.x = spot.x;
				shade.y = spot.y;
			}
			pointer.x = spot.x;
			pointer.y = spot.y;
			pointer.inside = spot.inside;
			pointer.seen = true;
			wake();
		};
		const onPointerDown = (event) => {
			const s = settingsRef.current;
			if (!locate(event).inside || !s.clickPulse || reduced) return;
			pulses.push({ age: 0 });
			if (pulses.length > MAX_PULSES) pulses.shift();
			wake();
		};
		const onLeave = () => {
			pointer.inside = false;
			wake();
		};
		const onPointerUp = (event) => {
			if (event.pointerType !== "mouse") onLeave();
		};
		window.addEventListener("pointermove", onPointerMove, { passive: true });
		window.addEventListener("pointerdown", onPointerDown, { passive: true });
		window.addEventListener("pointerup", onPointerUp, { passive: true });
		window.addEventListener("pointercancel", onPointerUp, { passive: true });
		document.documentElement.addEventListener("pointerleave", onLeave);
		const onLost = (event) => {
			event.preventDefault();
			lost = true;
			cancelAnimationFrame(raf);
			raf = 0;
		};
		const onRestored = () => setGeneration((value) => value + 1);
		canvas.addEventListener("webglcontextlost", onLost);
		canvas.addEventListener("webglcontextrestored", onRestored);
		const resizeObserver = new ResizeObserver(() => {
			resize();
			wake();
		});
		resizeObserver.observe(container);
		const intersection = new IntersectionObserver((entries) => {
			visible = entries.some((entry) => entry.isIntersecting);
			wake();
		});
		intersection.observe(container);
		const onVisibility = () => {
			pageVisible = document.visibilityState !== "hidden";
			wake();
		};
		document.addEventListener("visibilitychange", onVisibility);
		resize();
		wake();
		return () => {
			cancelAnimationFrame(raf);
			wakeRef.current = null;
			resizeObserver.disconnect();
			intersection.disconnect();
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerdown", onPointerDown);
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			document.documentElement.removeEventListener("pointerleave", onLeave);
			document.removeEventListener("visibilitychange", onVisibility);
			canvas.removeEventListener("webglcontextlost", onLost);
			canvas.removeEventListener("webglcontextrestored", onRestored);
			if (!gl.isContextLost()) {
				gl.deleteVertexArray(vao);
				gl.deleteProgram(shader.program);
			}
		};
	}, [generation]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className: `pointer-events-none relative h-full w-full overflow-hidden ${className}`.trim(),
		style,
		children: /* @__PURE__ */ jsx("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 block h-full w-full",
			"aria-hidden": "true"
		})
	});
};
// resources/js/components/hero.tsx
function Hero() {
	const [offsetY, setOffsetY] = useState(0);
	useEffect(() => {
		const handleScroll = () => setOffsetY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "h-svh pb-12 pt-24 w-full max-w-full isolate relative overflow-clip bg-foreground dark:bg-background",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 w-full h-full transform-gpu",
				style: {
					transform: `scale(${1 + offsetY * 25e-5})`,
					transformOrigin: "center center"
				},
				children: /* @__PURE__ */ jsx("img", {
					src: hero_4k_16x9_default,
					alt: "Target Cranes - Mobile Crane Hire & Managed Lifting",
					className: "w-full h-full mx-auto object-cover object-center -translate-y-8 md:translate-y-0"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 z-10 mix-blend-plus-lighter",
				children: /* @__PURE__ */ jsx(LightRays, {
					raysOrigin: "top-center",
					raysColor: "#ece4d7",
					raysSpeed: 2,
					lightSpread: .75,
					rayLength: 5,
					glow: .2,
					haze: 10.5,
					followMouse: true,
					mouseInfluence: .15,
					rayDensity: 1,
					tilt: 0,
					raySharpness: .75,
					atmosphere: 1,
					intensity: .85,
					fadeDistance: 1,
					saturation: 2,
					noiseAmount: 0,
					distortion: 0,
					pulsating: false,
					cursorShadow: false,
					clickPulse: false,
					intro: true,
					lightMode: false
				})
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-20 text-white flex items-end justify-center md:justify-start h-full pb-6 sm:pb-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "drop-shadow-black drop-shadow-xl max-w-4xl max-md:text-center",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl hidden md:block font-heading tracking-widest opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]",
						children: "THE TRUSTED NAME BEHIND"
					}), /* @__PURE__ */ jsx("h1", {
						className: "mt-2",
						children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "max-md:flex-row max-md:justify-center max-md:items-baseline max-md:gap-1.5 text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter max-w-3xl text-balance uppercase whitespace-nowrap",
							children: [/* @__PURE__ */ jsx(SwipeLine, {
								delay: 2,
								children: "THE NATIONS"
							}), /* @__PURE__ */ jsx(SwipeLine, {
								delay: 3,
								children: /* @__PURE__ */ jsx("span", {
									className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
									children: "HEAVIEST LIFTS"
								})
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute bottom-0 inset-x-0 z-10 h-2/5 bg-linear-to-t from-foreground dark:from-background to-transparent flex items-end justify-center pb-8 pointer-events-none"
			})
		]
	});
}
// resources/images/panorama.webp
var panorama_default = "/build/assets/panorama-BH1CJntt.webp";
// resources/js/components/stats.tsx
var statsData = [
	{
		icon: Award,
		value: siteStats.yearsInBusiness,
		label: "Years in Business"
	},
	{
		icon: HardHat,
		value: siteStats.successfulProjects,
		label: "Successful Projects"
	},
	{
		icon: Clock,
		value: siteStats.availability,
		label: "Availability"
	}
];
function Stats() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-foreground dark:bg-background text-white pb-6 md:pb-12 pt-16 md:pt-24 border-y border-primary overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 z-0 pointer-events-none ",
			style: {
				backgroundImage: `url(${panorama_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				maskImage: "linear-gradient(to top, transparent 0%, black 75%)",
				WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 75%)"
			}
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row gap-12 lg:gap-8 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-full lg:w-2/5 flex",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col space-y-2 text-left font-heading uppercase font-black text-3xl lg:text-4xl tracking-tighter leading-tight",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, {
								className: `text-white`,
								children: "Why Target Cranes"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-white",
								children: "Measured movements."
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-white",
								children: "Clear communications."
							}),
							/* @__PURE__ */ jsx("span", {
								className: `text-primary`,
								children: "This is Target."
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full lg:w-3/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-left w-full",
						children: statsData.map((stat, index) => {
							const Icon = stat.icon;
							return /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center justify-center space-y-2 py-8 sm:py-4 px-4 text-center",
								children: [
									/* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-white mb-1" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-4xl lg:text-5xl font-black font-heading tracking-tighter drop-shadow-sm whitespace-nowrap",
										children: stat.value
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-sm font-bold uppercase tracking-wider text-balance opacity-90",
										children: stat.label
									})
								]
							}, index);
						})
					})
				})]
			})
		})]
	});
}
// resources/images/welcome.webp
var welcome_default = "/build/assets/welcome-CKlmCNJ6.webp";
// resources/js/components/who-we-are.tsx
function WhoWeAre() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted overflow-hidden isolate relative",
		children: [/* @__PURE__ */ jsx(DotPattern, { corner: "top-left" }), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-8",
							children: "Our Approach"
						}),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl md:text-6xl z-0 relative font-black font-heading tracking-tighter uppercase mb-6 text-balance",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Every Lift Starts With" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Understanding The Job"
							}) })]
						}) }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl",
							children: [/* @__PURE__ */ jsx("p", { children: "No two lifting projects present the same conditions. The load, available space, site access and work schedule all shape the approach." }), /* @__PURE__ */ jsx("p", { children: "At Target Cranes, we take time to understand those details before work begins, so the lifting plan fits the job in front of us." })]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7 z-10 relative flex items-center justify-center lg:justify-end",
					children: /* @__PURE__ */ jsx("img", {
						src: welcome_default,
						alt: "Target Cranes operations",
						className: "w-full max-w-3xl lg:max-w-none h-auto object-contain drop-shadow-2xl lg:scale-115 xl:scale-125 origin-center lg:origin-right"
					})
				})]
			})
		})]
	});
}
// resources/images/abnormal-crane-cutout.webp
var abnormal_crane_cutout_default = "/build/assets/abnormal-crane-cutout-ajq8LULo.webp";
// resources/js/components/service-areas-alt-3.tsx
var services = [
	{
		title: "Maritime",
		paragraphs: ["Our experience in the maritime industry spans many shipyard, port, and offshore projects.", "Whether it’s vessel launches, dry-dock work, or harbour operations, we take pride in playing a part in projects that support the ongoing growth of the maritime sector."],
		icon: Anchor
	},
	{
		title: "CONSTRUCTION & CIVIL ENGINEERING",
		paragraphs: [
			"With years of experience in the construction sector, we’ve contributed to many of the nation’s most notable infrastructure and building projects.",
			"From large-scale civil works to landmark high-rise developments, our team provides complete crane hire solutions that keep progress on track.",
			"Supported by a versatile fleet and the capability to handle both everyday and specialised lifting requirements, we remain a trusted partner to the construction industry."
		],
		icon: HardHat
	},
	{
		title: "Renewable Energy",
		paragraphs: [
			"We’re proud to be part of renewable energy projects that are transforming Africa’s power landscape. ",
			"From wind and solar installations to hydro developments, our crane hire services provide the strength and reliability needed for large-scale energy work. ",
			"Supported by specialised equipment and a dedicated team, we continue to play a role in building a cleaner, more sustainable future."
		],
		icon: Wind
	},
	{
		title: "Mining",
		paragraphs: [
			"With extensive experience in the mining sector, we’ve supported operations that drive growth and development across the industry. ",
			"From installing heavy plant infrastructure to relocating oversized machinery, our team provides dependable crane hire solutions designed for the unique demands of mining. ",
			"Equipped with specialised gear and the capability to perform in the toughest conditions, we continue to deliver lifting services that keep projects moving and remain a reliable partner to mining operations across the region."
		],
		icon: Pickaxe
	}
];
function ServiceAreasAlt3() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative overflow-x-clip",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 z-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "sticky top-0 h-svh w-full overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-0 left-0 w-full lg:w-1/2 h-[85%] bg-contain bg-bottom-left bg-no-repeat opacity-15 dark:opacity-25",
					style: {
						backgroundImage: `url(${abnormal_crane_cutout_default})`,
						maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)",
						WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)"
					}
				})
			})
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:w-1/3 lg:sticky lg:top-32 flex flex-col",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-8",
							children: "Industry"
						}),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Service" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Areas"
							}) })]
						}) }),
						/* @__PURE__ */ jsxs("p", {
							className: "text-lg text-muted-foreground leading-relaxed",
							children: [
								"We provide specialised lifting services across a variety of sectors.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("strong", {
									className: "text-foreground",
									children: " Note that we are not limited to these services"
								}),
								" our versatile fleet and experienced team are equipped to handle unique lifting requirements in almost any industry."
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:w-2/3 flex flex-col gap-12 md:gap-16",
					children: services.map((service, index) => {
						const Icon = service.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-6 rounded-3xl border border-border bg-card/85 backdrop-blur-xs p-8 md:p-10 shadow-sm",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "bg-primary/10 p-4 rounded-2xl border border-primary/20 shrink-0",
									children: /* @__PURE__ */ jsx(Icon, {
										className: "w-8 h-8 text-primary",
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-black font-heading uppercase text-foreground",
									children: service.title
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4 text-muted-foreground text-lg leading-relaxed",
								children: service.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsx("p", { children: paragraph }, pIndex))
							})]
						}, index);
					})
				})]
			})
		})]
	});
}
// resources/images/tall.webp
var tall_default = "/build/assets/tall-CSHx5bdJ.webp";
// resources/images/const.webp
var const_default = "/build/assets/const-CEQ22tYR.webp";
// resources/images/tall-2.webp
var tall_2_default = "/build/assets/tall-2-Be5qM-Xc.webp";
// resources/images/IMG-20261008-WA0040.webp
var IMG_20261008_WA0040_default = "/build/assets/IMG-20261008-WA0040-Cbx-jvQW.webp";
// resources/js/components/project-success-4.tsx
function ProjectSuccess4() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-muted py-24 lg:py-32 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }),
			/* @__PURE__ */ jsx(DotPattern, { corner: "bottom-left" }),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: "relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mb-16 lg:mb-24",
					children: [/* @__PURE__ */ jsx(SectionLabel, {
						className: "mb-8",
						children: "Planning & Execution"
					}), /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
						className: "text-5xl md:text-7xl font-black font-heading text-foreground drop-shadow-sm uppercase tracking-tight leading-[1.1]",
						children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Preparation Makes" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
							className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
							children: "The Difference"
						}) })]
					}) })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal",
						children: [
							/* @__PURE__ */ jsx("p", { children: "A crane is only one part of a successful operation. Behind each lift is a process of assessing the site, selecting suitable equipment and coordinating the people involved. For more complex work, that preparation can include detailed lift plans, method studies and crane configurations." }),
							/* @__PURE__ */ jsx("p", { children: "Our aim is to give clients a clear path from the first discussion to the completed lift one built on practical planning and communication throughout the job." }),
							/* @__PURE__ */ jsxs("div", {
								className: "pt-2 border-t border-border/60 space-y-4",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold font-heading uppercase text-foreground",
										children: "A Partner On Site"
									}),
									/* @__PURE__ */ jsx("p", { children: "Lifting work often happens alongside other teams and deadlines. We work with clients and site teams to understand the wider project, communicate the plan and respond to the conditions on the ground." }),
									/* @__PURE__ */ jsx("p", { children: "Whether the requirement is straightforward or technically demanding, we bring the same attention to preparation and execution." })
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7 h-full",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
									children: /* @__PURE__ */ jsx("img", {
										src: tall_default,
										className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
										alt: "Crane operation 1"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
									children: /* @__PURE__ */ jsx("img", {
										src: const_default,
										className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
										alt: "Crane operation 2"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
									children: /* @__PURE__ */ jsx("img", {
										src: tall_2_default,
										className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
										alt: "Crane operation 3"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
									children: /* @__PURE__ */ jsx("img", {
										src: IMG_20261008_WA0040_default,
										className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
										alt: "Crane operation 4"
									})
								})
							]
						})
					})]
				})]
			})
		]
	});
}
// resources/images/black-white.webp
var black_white_default = "/build/assets/black-white-EH1MbV7t.webp";
// resources/js/components/nationwide-service-2.tsx
var nationwideStats = [
	{
		number: "01",
		icon: Award,
		value: siteStats.yearsInBusiness,
		label: "Years in Business",
		description: "Providing exceptional mobile crane hire and heavy rigging services across multiple industries."
	},
	{
		number: "02",
		icon: ShieldCheck,
		value: `${siteStats.combinedExperienceYears}+`,
		label: "Years Management Experience",
		description: "Collective senior leadership guiding complex lifting contracts and site operations nationwide."
	},
	{
		number: "03",
		icon: HardHat,
		value: siteStats.successfulProjects,
		label: "Successful Projects",
		description: "Completed with precision and safety, ranging from routine commercial lifts to major infrastructure projects."
	},
	{
		number: "04",
		icon: Clock,
		value: siteStats.availability,
		label: "Operational Availability",
		description: "Ready to mobilize and respond to your scheduled or emergency lifting requirements anytime, day or night."
	}
];
function NationwideService2() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-background border-t border-border py-20 lg:py-28 relative overflow-x-clip",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 overflow-hidden z-0",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-8 dark:opacity-20",
					style: {
						backgroundImage: `url(${black_white_default})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
						WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
					}
				}),
				/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }),
				/* @__PURE__ */ jsx(DotPattern, { corner: "bottom-left" })
			]
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 lg:sticky lg:top-32 space-y-6",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, { children: "Target Cranes in South Africa" }),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Target Cranes" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "In South Africa"
							}) })]
						}) }),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl",
							children: "These stats help showcase Target Cranes’ experience, capabilities, and commitment to safety and customer satisfaction, making a strong impression on potential clients."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6",
					children: nationwideStats.map((stat) => {
						const Icon = stat.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "group relative flex flex-col justify-between rounded-3xl border border-border bg-card/85 backdrop-blur-xs p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between gap-4 mb-6",
									children: /* @__PURE__ */ jsx("div", {
										className: "flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
										children: /* @__PURE__ */ jsx(Icon, {
											className: "size-6",
											strokeWidth: 1.75
										})
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-4xl sm:text-5xl font-black font-heading tracking-tighter text-primary",
										children: stat.value
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-lg font-black font-heading uppercase tracking-tight text-foreground",
										children: stat.label
									})]
								})] }),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/60 pt-4",
									children: stat.description
								})
							]
						}, stat.label);
					})
				})]
			})
		})]
	});
}
// resources/js/components/home-hero-split.tsx
var pillars = [
	{
		icon: Truck,
		title: "Right-Sized Fleet",
		description: "Modern mobile and all-terrain cranes matched precisely to your load, reach, and site access."
	},
	{
		icon: ClipboardCheck,
		title: "Engineered Lift Plans",
		description: "Thorough site surveys, load calculations, and rigging studies completed before the lift begins."
	},
	{
		icon: HardHat,
		title: "Managed Operations",
		description: "Certified operators, skilled riggers, and dedicated supervision keeping your schedule on track."
	},
	{
		icon: ShieldCheck,
		title: "Uncompromising Safety",
		description: "Strict compliance and zero-shortcut execution across routine lifts and complex heavy projects."
	}
];
function HomeHeroSplit() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden py-10 lg:py-12 bg-linear-to-br from-zinc-950 via-primary/95 to-primary text-white border-y border-white/10",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none opacity-20 absolute inset-0 bg-[radial-gradient(circle,#ffffff40_2px,transparent_2px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_at_top_right,black_35%,transparent_60%)]"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 lg:gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(SectionLabel, {
							className: "text-white",
							children: "End-to-End Lifting Partner"
						}), /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx(SwipeTitle, {
							className: "text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tighter uppercase text-white text-balance",
							children: /* @__PURE__ */ jsx(SwipeLine, { children: "Precision Equipment & Engineered Lift Planning" })
						}) })]
					}), /* @__PURE__ */ jsx("p", {
						className: "max-w-xl text-sm sm:text-base leading-relaxed text-white/85",
						children: "From routine commercial lifts to complex multi-crane projects, Target Cranes delivers turnkey lifting solutions tailored to your site, load, and schedule."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/15",
					children: pillars.map((pillar) => {
						const Icon = pillar.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "group flex items-start gap-3.5 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-xs transition-colors hover:bg-white/10 hover:border-white/25",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/20 transition-transform group-hover:scale-105",
								children: /* @__PURE__ */ jsx(Icon, {
									className: "size-4",
									strokeWidth: 2
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-heading text-base font-bold uppercase tracking-wide text-white leading-tight",
									children: pillar.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs leading-relaxed text-white/80",
									children: pillar.description
								})]
							})]
						}, pillar.title);
					})
				})]
			})
		})]
	});
}
HomeHeroSplit.displayName = "HomeHeroSplit";
// resources/js/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, {}),
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(HomeHeroSplit, {}),
		/* @__PURE__ */ jsx(WhoWeAre, {}),
		/* @__PURE__ */ jsx(Stats, {}),
		/* @__PURE__ */ jsx(ServiceAreasAlt3, {}),
		/* @__PURE__ */ jsx(ScrollDivider, { texts: [/* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(Truck, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Mobile & All-Terrain Crane Hire" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(ClipboardCheck, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Engineered Lift Planning" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(Compass, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Heavy Rigging & Site Surveys" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(ShieldCheck, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Certified Safety Compliance" })]
			})
		] }), /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(Anchor, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Maritime & Port Operations" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(HardHat, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Construction & Civil Engineering" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(Wind, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Renewable Energy Installations" })]
			}),
			"\xA0",
			/* @__PURE__ */ jsx("span", {
				className: "mx-3.75 inline-flex items-center",
				children: "•"
			}),
			"\xA0",
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-4 uppercase font-heading",
				children: [/* @__PURE__ */ jsx(Pickaxe, {
					className: "size-12 shrink-0",
					strokeWidth: 2.5
				}), /* @__PURE__ */ jsx("span", { children: "Mining & Heavy Plant Infrastructure" })]
			})
		] })] }),
		/* @__PURE__ */ jsx(ProjectSuccess4, {}),
		/* @__PURE__ */ jsx(NationwideService2, {})
	] });
}
Home.displayName = "Home";
Home.layout = AppLayout;
export { Home as default };
