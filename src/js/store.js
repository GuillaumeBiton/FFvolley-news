
import { createStore } from 'framework7';

const url = "http://ffvb.org/front/index.php?lvlid=1&mduuseid=Mw%3D%3D&dsgtypid=37&page=rss";

const store = createStore({
  state: {
    feeds: null,
    feedsLoading: false,
  },
  getters: {
    feedsLoading: ({ state }) => state.feedsLoading,
    feeds: ({ state }) => state.feeds,
  },
  actions: {
    loadFeeds({ state }) {
      state.feedsLoading = true;

      fetch(url).then((res) => { console.log(res); res.json() }).then((feeds) => state.feeds = feeds);
    },
  },
})
export default store;
