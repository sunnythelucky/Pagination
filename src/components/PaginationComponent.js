import React from "react";

import { Pagination, Grid, Stack } from "@mui/material";

const PaginationComponent = ({ pages, currentPage, handleChangePage }) => {
	return (
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
	);
};

export default PaginationComponent;
