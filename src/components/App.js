import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term },
			per_page: 20,
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar handleSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
