if (window.parent !== window) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
}

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar.jsx";
import VideoList from "./components/video_list.jsx";
import VideoDetail from "./components/video_detail.jsx"
import YTsearch from "youtube-api-search";
import _ from 'lodash';

const API_KEY = 'AIzaSyDRU_HBRcPm_7ks9B6H7FVjM9RGPoJ8eHI';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfing')
    }

    videoSearch(term) {

        YTsearch({
            key: API_KEY,
            term: term
        }, (videoData) => {
            this.setState({videos: videoData, selectedVideo: videoData[0]});
        });
    }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
            <div>

                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect= {selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        );
    }
};

ReactDOM.render(
    <App/>, document.querySelector('.container'))
