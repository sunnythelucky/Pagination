import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.handleSubmit(this.state.term);
	};
	render() {
		return (
			<Box
				component="form"
				noValidate
				onSubmit={this.onFormSubmit}
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
							value={this.state.term}
							onChange={(e) => {
								this.setState({ term: e.target.value });
							}}
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
		);
	}
}

export default SearchBar;
