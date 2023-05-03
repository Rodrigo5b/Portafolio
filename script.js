const $form = document.querySelector("#form")
const link = document.querySelector("#link")


$form.addEventListener("submit",submit)
function submit(event){
    event.preventDefault()
    const form = new FormData(this)
    link.setAttribute("href",`mailto:bustamanterodrigo15@gmail.com?subject=${form.get("asunto")}&body=${form.get("name")}${form.get("email")}${form.get("mensaje")}`)
    link.click()
}
