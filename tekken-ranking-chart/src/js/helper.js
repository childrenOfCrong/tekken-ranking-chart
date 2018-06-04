const  qs = (selector, targetEl=document)=> {
	return targetEl.querySelector(selector);
}

const $on = (target, type, callback, capture)=> {
	target.addEventListener(type, callback, !!capture);
}
