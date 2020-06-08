import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen((event, mode) => {
  if (mode.toLowerCase() !== 'replace') {
    window.scrollTo(0, 0);
  }
});

export default history;
