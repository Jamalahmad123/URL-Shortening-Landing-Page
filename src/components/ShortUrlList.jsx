import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ShortUrlList = ({ linksData, handleDelete }) => {
  const [isCopied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(linksData.shortLink);
    setCopied(true);
  }

  return (
    <div className="bg-white rounded-md p-4 space-y-4 relative md:flex md:items-center md:justify-between md:space-y-0">
      <FaTimes
        className="bg-white text-VeryDarkViolet border border-Red cursor-pointer rounded-full absolute -top-2 -right-2"
        size={20}
        onClick={() => handleDelete(linksData.id)}
      />
      <div className="pb-4 border-b border-gray-300 md:pb-0 md:border-none">
        <p className="text-VeryDarkViolet md:border-none md:pb-0 w-full">
          {linksData.actualLink}
        </p>
      </div>
      <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
        <p className="text-Cyan">{linksData.shortLink}</p>
        <button
          className={`text-base font-semibold capitalize text-white rounded-md py-2 px-4 w-full ${
            isCopied ? "bg-DarkViolet" : "bg-Cyan"
          }`}
          onClick={handleClick}
        >
          {isCopied ? "copied!" : "copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortUrlList;
