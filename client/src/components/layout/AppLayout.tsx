import { ComponentType, useState, useEffect } from "react";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
import ChatList from "./ChatList";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent: ComponentType<any>) => {
  return (props: any) => {
    const [isMobileContentVisible, setIsMobileContentVisible] = useState(false);
    const { id } = useParams(); // Get chat ID from URL

    useEffect(() => {
      if (id) {
        setIsMobileContentVisible(true);
      }
    }, [id]);

    return (
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Helmet>
          <title>Convo</title>
          <meta name="description" content="Convo chat application main page" />
        </Helmet>

        <Header />
        
        <div className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
          {/* Chat List Section */}
          <section className={`w-full md:w-[30%] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
            ${isMobileContentVisible ? 'hidden md:block' : 'block'}`}>
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
              <ChatList />
            </div>
          </section>

          {/* Main Content Section */}
          <section className={`w-full md:flex-1 bg-gray-50 dark:bg-gray-900 overflow-hidden 
            ${isMobileContentVisible ? 'block' : 'hidden md:block'}`}>
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
              <WrappedComponent {...props} />
            </div>
          </section>
        </div>
      </div>
    );
  };
};

export default AppLayout;