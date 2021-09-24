/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Typography, Grid } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

const Footer = () => {
	return (
		<footer style={{ marginTop: "20px", padding: "30px 0", backgroundColor: "rgba(215, 103, 53, 0.9)" }}>
			<Grid container style={{ flexFlow: "row", justifyContent: "center" }}>
				<Grid item>
					<Typography variant="h6" style={{ fontSize: "1rem" }}>
						<a target="_blank" rel="noreferrer" href="https://github.com/sunnythelucky" style={{ color: "black" }}>
							@sunnythelucky
						</a>
					</Typography>
				</Grid>
				<Grid item>
					<EmojiObjectsOutlinedIcon />
				</Grid>
			</Grid>
			<Typography variant="subtitle1" align="center" color="textSecondary" style={{ fontSize: "1rem", color: "white" }}>
				For more projects, please click my logo and come visit my github.
			</Typography>
		</footer>
	);
};

export default Footer;
