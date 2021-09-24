import { Container, Typography, Grid } from "@mui/material";

import PaginationComponent from "./PaginationComponent";
import ImageLists from "./ImageList";

const ResultPage = ({ term, pages, currentPage, handleChangePage, images }) => {
	return (
		<>
			<Container maxWidth="sm" mt={4}>
				<Typography>Results of "{term}"</Typography>
				<Grid container>
					<ImageLists images={images} align="center" term={term} />
					<PaginationComponent pages={pages} currentPage={currentPage} handleChangePage={handleChangePage} />
				</Grid>
			</Container>
		</>
	);
};

export default ResultPage;
