import ReactDOM from 'react-dom/client';
import { Provider as AppStoreProvider } from 'react-redux';

import { store } from './store';
import App from './App.tsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppStoreProvider store={store}>
    <App />
  </AppStoreProvider>
);
