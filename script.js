const links = document.querySelectorAll("a")

const linksArr = Array.from(links)

linksArr.map((link) => {
	link.setAttribute("target", "_blank")
})

console.log(linksArr)
