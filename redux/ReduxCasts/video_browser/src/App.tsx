import * as React from 'react';
import YTSearch from 'youtube-api-search';
import * as _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'CHAGE_YOUR_API_KEY';

interface State {
  videos: any;
  selectedVideo?: any;
}

class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      videos: []
    };

    this.videoSearch('radiohead');
  }

  render() {
    const videoSearch =
      _.debounce(
        (term: string) => {
          this.videoSearch(term);
        },
        300
      );

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }

  videoSearch = (term: string) => {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  };
}

export default App;
