const links = document.querySelectorAll("a");
const firstBtn = document.getElementById("first_work-btn");
const secBtn = document.getElementById("second_work-btn");
const thirdBtn = document.getElementById("third_work-btn");
const firstDescr = document.getElementById("pos1_description");
const secDescr = document.getElementById("pos2_description");
const thirdDescr = document.getElementById("pos3_description");
const firstBtnContent = document.querySelector("#first_work-btn > p")
const secondBtnContent = document.querySelector("#second_work-btn > p")
const thirdBtnContent = document.querySelector("#third_work-btn > p")

const linksArr = Array.from(links);

linksArr.forEach((link) => {
	link.setAttribute("target", "_blank");
});


const triggerText = (el, btnText) => {
	const computedStyle = window.getComputedStyle(el);
	const isDisplayed = computedStyle.getPropertyValue("display") === "block";

	if (isDisplayed) {
		el.style.opacity = "0";
		setTimeout(() => {
			btnText.textContent = "(read more...)"
			el.style.display = "none";
		}, 300);
	} else {
		el.style.display = "block";
		setTimeout(() => {
			btnText.textContent = "(read less...)"
			el.style.opacity = "1";
		}, 10);
	}
};

firstBtn.addEventListener("click", () => {
	triggerText(firstDescr, firstBtnContent);
});

secBtn.addEventListener("click", () => {
	triggerText(secDescr, secondBtnContent);
});

thirdBtn.addEventListener("click", () => {
	triggerText(thirdDescr, thirdBtnContent);
});
