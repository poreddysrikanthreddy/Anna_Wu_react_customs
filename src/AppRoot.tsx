import {
    initPlasmicLoader,
    PlasmicRootProvider,
    PlasmicComponent,
    ComponentRenderData
  } from '@plasmicapp/loader-react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import { PLASMIC } from './plasmic-init';
  
  function AppRoot() {
    return (
      <PlasmicRootProvider loader={PLASMIC}>
        <Router>
          <Routes>
            <Route path="/" element={CatchAllPage()} />
          </Routes>
        </Router>
      </PlasmicRootProvider>
    );
  }
  
  // We try loading the Plasmic page for the current route.
  // If it doesn't exist, then return "Not found."
  export function CatchAllPage() {
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState<ComponentRenderData | null>(null);
  
    useEffect(() => {
      async function load() {
        const pageData = await PLASMIC.maybeFetchComponentData(location.pathname);
        setPageData(pageData);
        setLoading(false);
      }
      load();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!pageData) {
      return <div>Not found</div>;
    }
    // The page will already be cached from the `load` call above.
    return <PlasmicComponent component={location.pathname} />;
  }