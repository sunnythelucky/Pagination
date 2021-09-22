import React, { useState, useEffect, useRef } from "react";

const ImageCard = (props) => {
	const [span, setSpan] = useState(0);
	const imageRef = useRef();

	useEffect(() => {
		imageRef.current.addEventListener("load", setSpans);
	}, []);

	useEffect(() => {
		setSpans();
	}, [span]);

	const setSpans = async () => {
		const height = await imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		setSpan(spans);
	};

	const { discription, urls } = props.image;
	return (
		<div style={{ gridRowEnd: `span ${span}` }}>
			<img ref={imageRef} alt={discription} src={urls.regular} />
		</div>
	);
};

export default ImageCard;
