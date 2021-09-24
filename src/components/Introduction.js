import { Typography } from "@mui/material";

const Introduction = () => {
	return (
		<>
			<Typography variant="h2" align="center" color="textPrimary" style={{ fontSize: "2rem" }}>
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
				Cat ipsum dolor sit amet, hopped up on catnip so intrigued by the shower purr as loud as possible, be the most
				annoying cat that you can, and, knock everything off the table so soft kitty warm kitty little ball of furr.
			</Typography>
		</>
	);
};

export default Introduction;
