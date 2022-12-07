const links = document.querySelectorAll("a")
// const dots = document.querySelector(".dots")

const linksArr = Array.from(links)

linksArr.map((link) => {
	link.setAttribute("target", "_blank")
})

// dots.addEventListener("mouseover", () => {
// 	dots.classList.remove("dots")
// 	dots.classList.add("dots-hover")
// })

// dots.addEventListener("mouseout", () => {
// 	dots.classList.remove("dots-hover")
// 	dots.classList.add("dots")
// })
