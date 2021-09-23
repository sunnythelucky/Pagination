/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../unsplash";
import ImageLists from "./ImageList";
import { AppBar, Container, Toolbar, Typography, Pagination, Grid, Stack } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";

const theme = createTheme();

const App = () => {
	const [images, setImages] = useState([]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [term, setTerm] = useState("");
	const [showPage, setShowPage] = useState(false);
	const [noResult, setNoResult] = useState(false);

	// const history = useHistory();

	// const setHistory = (term) => {
	// 	const params = new URLSearchParams();
	// 	if (term) {
	// 		params.append("search", term);
	// 	}

	// 	history.push({
	// 		search: params.toString(),
	// 	});
	// };

	useEffect(() => {
		setCurrentPage(1);
		onSearchSubmit();
	}, [term]);

	useEffect(() => {
		onSearchSubmit();
	}, [currentPage]);

	const onSearchSubmit = async () => {
		// setHistory(term);
		const response = await unsplash.get("/search/photos", {
			params: { query: term, page: currentPage, per_page: 9 },
		});
		if (term === "") {
			setShowPage(false);
			setNoResult(true);
		} else if (response.data.results.length === 0) {
			setNoResult(true);
			setShowPage(false);
		} else {
			setImages(response.data.results);
			setPages(response.data.total_pages);
			setShowPage(true);
			setNoResult(false);
		}
	};

	const handleChangePage = (_, page) => {
		setCurrentPage(page);
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container>
				<Grid item sm={12} xs={12} md={12} lg={12}>
					<AppBar position="relative" style={{ backgroundColor: "#8FB0A9" }}>
						<Toolbar>
							<PhotoCamera sx={{ mr: 1 }} />
							<Typography variant="h6">Sunsplash</Typography>
						</Toolbar>
					</AppBar>
					<main>
						<Container component="main" maxWidth="sm">
							<SearchBar handleSubmit={setTerm} display="flex" />
						</Container>
						<Container maxWidth="sm">
							<Typography variant="h2" align="center" color="textPrimary" style={{ fontSize: "2rem" }} gutterBottom>
								Photo Album
							</Typography>
							<Typography
								variant="h5"
								align="center"
								color="textSecondary"
								paragraph
								style={{ fontSize: "1.2rem" }}
								guttuerBottom
							>
								Cat ipsum dolor sit amet, hopped up on catnip so intrigued by the shower purr as loud as possible, be
								the most annoying cat that you can, and, knock everything off the table so soft kitty warm kitty little
								ball of furr.
							</Typography>
							{showPage ? (
								<>
									<Container maxWidth="sm" mt={4}>
										<Typography>Results of "{term}"</Typography>
										<Grid container>
											<ImageLists images={images} align="center" />
											<Grid container>
												<Grid item xs={12} sm={12} md={12}>
													<Stack spacing={1} style={{ flexFlow: "row", justifyContent: "center" }}>
														<Pagination
															size="small"
															count={pages}
															page={currentPage}
															onChange={handleChangePage}
															color="standard"
															variant="outlined"
															siblingCount={1}
														/>
													</Stack>
												</Grid>
											</Grid>
										</Grid>
									</Container>
								</>
							) : term === "" && noResult ? (
								""
							) : noResult ? (
								<Typography variant="h4" align="center" color="textPrimary" paragraph marginTop={5}>
									You'd better search for another thing!
								</Typography>
							) : (
								""
							)}
						</Container>
					</main>
					<Footer />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
