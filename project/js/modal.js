const modal = document.querySelector('.modal')
const triggerButton = document.querySelector('#btn-get')
const closeButton = document.querySelector('.modal_close')
const modalContent = document.querySelector('.modal_content')

const openModal = ()=>{
		modal.style.display = 'block'
		document.body.style.overflow = 'hidden'
}
const closeModal = ()=>{
		modal.style.display = 'none'
		document.body.style.overflow = ''
}

triggerButton.onclick = ()=> openModal()
closeButton.onclick = () => closeModal()

modal.onclick = (event) =>{
	if(event.target === modal){
		closeModal()
	}
}

const onScroll = () => {
	const scrollTop = window.scrollY || document.documentElement.scrollTop
	const windowHeight = window.innerHeight
	const documentHeight = document.documentElement.scrollHeight

	if (scrollTop + windowHeight >= documentHeight) {
		setTimeout(() => {
			openModal()
		})

		window.removeEventListener('scroll', onScroll)
	}
}

window.addEventListener('scroll', onScroll)


setTimeout(()=>{
	openModal()
},10000)
