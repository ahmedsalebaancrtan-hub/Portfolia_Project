import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-midnight-bg text-slate-900 dark:text-[#F9FAFB] scroll-smooth transition-colors">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainPage;