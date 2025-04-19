import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />
      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-20 pt-16">
        {children}
      </main>
      <Navigation />
    </div>;
};
export default Layout;