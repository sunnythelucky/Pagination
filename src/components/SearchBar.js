import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.handleSubmit(this.state.term);
	};
	render() {
		return (
			<>
				<CssBaseline />
				<Box
					md={{
						marginTop: 8,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
					sm={{
						marginTop: 8,
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Box component="form" noValidate onSubmit={this.onFormSubmit}>
						<Grid container spacing={2}>
							<Grid item md={10}>
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
								/>
							</Grid>
							<Grid item md={2}>
								<Button type="submit" fullWidth variant="contained" md={{ mb: 2 }}>
									Search
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</>
		);
	}
}

export default SearchBar;
