import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { VideoModal } from './components/VideoModal';

// Pages
import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { RecipesPage } from './pages/RecipesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { VideosPage } from './pages/VideosPage';
import { FoodTrailsPage } from './pages/FoodTrailsPage';
import { FoodTrailDetailPage } from './pages/FoodTrailDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

import { VideoItem } from './types';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenVideo = (video: VideoItem) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  // Route matching logic
  const renderCurrentPage = () => {
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';

    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage navigate={navigate} onOpenVideo={handleOpenVideo} />;
    }

    if (cleanPath === '/stories' || cleanPath.startsWith('/stories/')) {
      return <RecipesPage navigate={navigate} />;
    }

    if (cleanPath === '/recipes') {
      return <RecipesPage navigate={navigate} />;
    }

    if (cleanPath.startsWith('/recipes/')) {
      const slug = cleanPath.replace('/recipes/', '');
      return <RecipeDetailPage slug={slug} navigate={navigate} />;
    }

    if (cleanPath === '/videos') {
      return <VideosPage onOpenVideo={handleOpenVideo} />;
    }

    if (cleanPath === '/food-trails') {
      return <FoodTrailsPage navigate={navigate} />;
    }

    if (cleanPath.startsWith('/food-trails/')) {
      const slug = cleanPath.replace('/food-trails/', '');
      return <FoodTrailDetailPage slug={slug} navigate={navigate} />;
    }

    if (cleanPath === '/about' || cleanPath === '/about-us') {
      return <AboutPage navigate={navigate} />;
    }

    if (cleanPath === '/collaborate') {
      return <CollaboratePage />;
    }

    if (cleanPath === '/contact' || cleanPath === '/contact-us') {
      return <ContactPage navigate={navigate} />;
    }

    if (cleanPath === '/privacy-policy' || cleanPath === '/privacy-policy-2') {
      return <PrivacyPolicyPage />;
    }

    // Default fallback to HomePage
    return <HomePage navigate={navigate} onOpenVideo={handleOpenVideo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#1B1A17] selection:bg-[#C0392B] selection:text-white font-sans antialiased">
      {/* Sticky Global Navbar */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Editorial Footer */}
      <Footer navigate={navigate} />

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />

      <VideoModal
        video={activeVideo}
        onClose={handleCloseVideo}
      />
    </div>
  );
};
export default App;
