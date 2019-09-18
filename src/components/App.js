import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyDrDcVZa65epoESo4n7IHUtGEBndoxMq3o";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onTermSubmit('React Native');
    }
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });
    this.setState({ 
        selectedVideo: response.data.items[0],
        videos: response.data.items 
    });
  };
  onVideoSelect = video => {
      this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail key="1" video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
