import { createContext, useContext, useState ,useEffect} from "react";

export const ScreenSizeContext = createContext(undefined);

 export const ScreenSizeProvider = ({ children }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [screenSize, setScreenSize]=useState(window.innerWidth)
    
    useEffect(() => {
        window.onresize=function (event){
          setScreenSize(window.innerWidth)
        }
        const mediaQuery = window.matchMedia("(max-width:1000px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
       
        return () => {
        
          mediaQuery.addListener(handleMediaQueryChange);
        };
      }, []);

      const handleMediaQueryChange = (mediaQuery) => {
      
       
        if (mediaQuery.matches) {
        
          setIsSmallScreen(true);
      
          
        } else {
          setIsSmallScreen(false);
      
        }
      };
    
  return (
    <ScreenSizeContext.Provider
      value={ {isSmallScreen,screenSize}}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreen=() => useContext(ScreenSizeContext)



