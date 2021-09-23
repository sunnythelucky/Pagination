import "./ImageList.css";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageCard from "./ImageCard";
import { Grid } from "@mui/material";

const ImageLists = (props) => {
	const images = props.images.map((image) => {
		return (
			<Grid item sm={12} xs={12} md={12} lg={12}>
				<ImageCard key={image.id} image={image} />
			</Grid>
		);
	});

	return (
		<ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
			{images}
		</ImageList>
	);
};

export default ImageLists;