import React from "react";
import ImageListItem from "@mui/material/ImageListItem";

const ImageCard = (props) => {
	// const [span, setSpan] = useState(0);
	// const imageRef = useRef();

	// useEffect(() => {
	// 	imageRef.current.addEventListener("load", setSpans);
	// }, []);

	// useEffect(() => {
	// 	setSpans();
	// }, [span]);

	// const setSpans = async () => {
	// 	const height = await imageRef.current.clientHeight;
	// 	const spans = Math.ceil(height / 10);
	// 	setSpan(spans);
	// };

	const { urls, id, alt_description } = props.image;

	const url = new URL(urls.raw);
	const baseURL = url.protocol + "//" + url.hostname + url.pathname;

	return (
		<>
			{/* <div style={{ gridRowEnd: `span ${span}` }}>
				<img ref={imageRef} alt={discription} src={urls.regular} />
			</div> */}

			<ImageListItem key={id}>
				<img
					src={`${baseURL}?w=164&h=164&fit=crop&auto=format`}
					srcSet={`${baseURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
					alt={alt_description}
					loading="lazy"
				/>
			</ImageListItem>
		</>
	);
};

export default ImageCard;
