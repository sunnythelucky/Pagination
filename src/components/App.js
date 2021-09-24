/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import unsplash from "../unsplash";

import Introduction from "./Introduction";
import ResultPage from "./ResultPage";
import ImageDetail from "./ImageDetail";

import Footer from "./Footer";

const theme = createTheme();

const App = () => {
	const [images, setImages] = useState([]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [term, setTerm] = useState("");
	const [showPage, setShowPage] = useState(false);
	const [noResult, setNoResult] = useState(false);

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
		<Router>
			<ThemeProvider theme={theme}>
				<NavBar />
				<main>
					<SearchBar handleSubmit={setTerm} display="flex" />
					<Container maxWidth="sm">
						<Switch>
							<Route path={`/photos/${term}/:id`}>
								<ImageDetail images={images} />
							</Route>
							<Route path={`/photos/${term}`}>
								{showPage ? (
									<ResultPage
										term={term}
										pages={pages}
										currentPage={currentPage}
										handleChangePage={handleChangePage}
										images={images}
									/>
								) : term === "" && noResult ? (
									""
								) : noResult ? (
									<Typography variant="h4" align="center" color="textPrimary" paragraph marginTop={5}>
										Loading...!
									</Typography>
								) : (
									""
								)}
							</Route>
							<Route path="/">
								<Introduction />
							</Route>
						</Switch>
					</Container>
				</main>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};

export default App;
