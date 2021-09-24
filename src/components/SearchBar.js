import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const SearchBar = ({ handleSubmit }) => {
	const history = useHistory();
	const [term, setTerm] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		handleSubmit(term);
		history.push(`/photos/${term}`);
		setTerm("");
	};

	return (
		<Container component="main" maxWidth="sm">
			<Box
				component="form"
				noValidate
				onSubmit={onFormSubmit}
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: 4,
				}}
			>
				<Grid container={true} direction="row" spacing={2} xs={{ display: "block" }}>
					<Grid item md={10} sm={10} xs={12}>
						<TextField
							fullWidth
							name="searchBar"
							label="searchBar"
							type="searchBar"
							id="searchBar"
							value={term}
							onChange={(e) => setTerm(e.target.value)}
							size="small"
						/>
					</Grid>
					<Grid item md={2} sm={2} xs={12}>
						<Button type="submit" fullWidth variant="contained" size="normal" style={{ backgroundColor: "#F2D8B3" }}>
							Search
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default SearchBar;
