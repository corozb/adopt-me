import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import './Modal.css'

const Modal = ({ children }) => {
	const elRef = useRef(null)

	if (!elRef.current) {
		const div = document.createElement('div')
		elRef.current = div
	}

	useEffect(() => {
		const modalRoof = document.getElementById('modal')
		modalRoof.appendChild(elRef.current)

		return () => modalRoof.removeChild(elRef.current)
	}, [])

	return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
