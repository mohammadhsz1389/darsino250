
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import ToolsPage from './pages/ToolsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { Page } from './types';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage setActivePage={setActivePage} />;
            case 'lessons':
                return <LessonsPage />;
            case 'tools':
                return <ToolsPage />;
            case 'profile':
                return <ProfilePage />;
            case 'settings':
                return <SettingsPage theme={theme} setTheme={setTheme} />;
            default:
                return <HomePage setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-vazir">
            <div className="max-w-lg mx-auto h-screen flex flex-col">
                <main className="flex-grow overflow-y-auto pb-24">
                    {renderPage()}
                </main>
                <BottomNav activePage={activePage} setActivePage={setActivePage} />
            </div>
        </div>
    );
};

export default App;
