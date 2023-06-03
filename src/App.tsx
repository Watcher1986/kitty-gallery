import { AppLayout } from './layouts/AppLayout';
import { Preloader } from './components/Preloader';
import CatsBreedsGallery from './containers/CatsBreedsGallery';

function App() {
  return (
    <>
      <Preloader />
      <AppLayout>
        <CatsBreedsGallery />
      </AppLayout>
    </>
  );
}

export default App;
