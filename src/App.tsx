import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Details } from "./components/details";
import { ACTION_PARAM, BASE_URL, EXPIRY_DURATION } from "./utils/constants";

const storeInLocalStorage = (preference: string) => {
  localStorage.setItem("explorer-landing", JSON.stringify({ preference, timestamp: new Date().getTime() }));
};

const processPath = () => {
  const urlParts = window.location.pathname.split("/");
  return urlParts.filter((value) => value.length > 0);
};

const createUrl = (label: string) => {
  const urlParts = processPath();
  const action = urlParts[0];
  const hash = urlParts[1];
  let newUrl = BASE_URL[label];
  if (action && ACTION_PARAM[label][action]) {
    newUrl = newUrl + ACTION_PARAM[label][action];
    if (hash) newUrl = newUrl + hash;
  }
  return newUrl;
};

function App() {
  const hash = processPath()[1];
  useEffect(() => {
    if(hash === "clear-cache") localStorage.removeItem("explorer-landing") 
    const prevPref = localStorage.getItem("explorer-landing");
    if (prevPref) {
      const prevPrefValue = JSON.parse(prevPref);
      if (new Date().getTime() - prevPrefValue.timestamp < EXPIRY_DURATION) {
        window.location.replace(createUrl(prevPrefValue.preference));
      }
    }
  }, []);

  const handleClick = (label: string) => {
    storeInLocalStorage(label);
    window.location.replace(createUrl(label));
  };

  return (
    <div className="flex bg-blue-blue-800 w-full h-screen overflow-hidden text-center text-sm text-text-white font-inter justify-center">
      <div className="sm:w-[548px] flex flex-col items-center justify-center gap-[64px] m-4">
        <Details hash={hash} />
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-left text-base">
          <Button label="Fetch Station" onClick={() => handleClick("Fetch Station")} src="/logo@2x.png" />
          <Button label="Mintscan" onClick={() => handleClick("Mintscan")} src="/cosmostation@2x.png" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[0px] left-[184px] w-[1095px] h-[262px]">
        <div className="absolute top-[262px] left-[0px] rounded-[1193.69px] bg-blueviolet [filter:blur(300px)] box-border w-[262px] h-[613px] [transform:_rotate(-90deg)] [transform-origin:0_0] border-[3.8px] border-solid border-gray-700" />
        <div className="absolute top-[262px] left-[398px] rounded-[1193.69px] bg-mediumspringgreen [filter:blur(300px)] w-[262px] h-[697px] [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.56]" />
      </div>
      <div className="xl:hidden absolute top-[0px] left-[0px] h-[262px] w-full">
        <div className="absolute top-[0px] left-[0px] rounded-[1193.69px] bg-blueviolet [filter:blur(300px)] box-border w-[50%] h-[262px]  [transform-origin:0_0] opacity-[0.7] border-[3.8px] border-solid border-gray-700" />
        <div className="absolute top-[0px] left-[50%] rounded-[1193.69px] bg-mediumspringgreen [filter:blur(300px)] w-[50%] h-[262px] [transform-origin:0_0] opacity-[0.7]" />
      </div>
    </div>
  );
}

export default App;
