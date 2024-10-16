import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';

export function toggleRunning() {
	state.isRunning = document.documentElement.classList.toggle('running');
	el.set.classList.add('secondary');
	el.minutes.setAttribute('contenteditable', false);
	timer.contdown();
}
export function reset() {
	state.isRunning = false;
	document.documentElement.classList.remove('running');
	el.set.classList.add('secondary');
	timer.updateDisplay();
}
export function set() {
	el.minutes.setAttribute('contenteditable', true);
	el.minutes.focus();
	el.seconds.setAttribute('contenteditable', true);
	el.set.classList.remove('secondary');
}
export function toggleMusic() {
	state.isMute = document.documentElement.classList.toggle('music-on');
}
