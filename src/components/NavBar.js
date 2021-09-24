import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const NavBar = () => {
	const history = useHistory();
	const handleClick = (e) => {
		e.preventDefault();
		history.push("/");
		// handleInput();
	};

	return (
		<AppBar position="relative" style={{ backgroundColor: "#8FB0A9" }}>
			<Toolbar>
				<PhotoCamera sx={{ mr: 1 }} onClick={handleClick} />
				<Typography variant="h6">Sunsplash</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
