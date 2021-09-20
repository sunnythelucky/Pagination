import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import unsplash from "../unsplash";
import ImageList from "./ImageList";
import { AppBar, Container, Toolbar, Typography, Pagination } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
	const [images, setImages] = useState([]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [term, setTerm] = useState("");
	const [termChange, setTermChange] = useState(false);

	const history = useHistory();

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
			params: { query: term, page: currentPage },
		});

		setImages(response.data.results);
		setPages(response.data.total_pages);
	};

	const handleChangePage = (_, page) => {
		setCurrentPage(page);
	};

	return (
		<ThemeProvider theme={theme}>
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera />
					<Typography variant="h6">Photo Search</Typography>
				</Toolbar>
			</AppBar>
			<main style={{ marginTop: "40px" }}>
				<Container component="main" maxWidth="lg">
					<SearchBar handleSubmit={setTerm} />
				</Container>

				<div style={{ backgroundColor: "palette.background.paper", padding: "spacing(8,0,6)" }}>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Photo Album
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Velit commodo dolore ullamco nulla elit exercitation non velit mollit eiusmod in ea veniam commodo.
							Exercitation deserunt do ipsum pariatur tempor aute sit occaecat ullamco aute magna deserunt aute. Ullamco
							duis aliqua ex cupidatat minim dolore cillum laborum ad magna nostrud. Non anim nostrud adipisicing ut
							pariatur. Nostrud sunt nisi officia quis et qui veniam ea nostrud. Qui aute do amet consectetur
							adipisicing in occaecat esse mollit officia elit.
						</Typography>
					</Container>
				</div>
				<Container style={{ padding: "20px 0" }} maxWidth="md">
					<ImageList images={images} />
					<Pagination count={pages} page={currentPage} onChange={handleChangePage} color="secondary" />
				</Container>
			</main>

			<footer style={{ backgroundColor: "palette.background.paper", padding: "50px 0" }}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					Something here to give the footer a purpose!
				</Typography>
			</footer>
		</ThemeProvider>
	);
};

export default App;
