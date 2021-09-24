import React from "react";

import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@mui/material";

const ImageDetail = ({ images }) => {
	const { id } = useParams();
	console.log(id);
	const image = images.find((image) => image.id === `${id}`);
	console.log(image);

	const created_at = moment(image.created_at).format("DD/MMM/YYYY");

	return (
		<Grid container>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Card sx={{ maxWidth: 345, margin: "auto" }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
								{image.user.last_name.split("")[0]}
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={image.alt_description.toUpperCase()}
						subheader={created_at}
					/>
					<CardMedia component="img" height="194" image={image.urls.small} alt="Paella dish" />
					<CardContent>
						<a target="_blank" rel="noreferrer" href={image.urls.small}>
							<Typography>Click it!</Typography>
						</a>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ImageDetail;
