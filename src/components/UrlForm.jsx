import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import ShortUrlList from "./ShortUrlList";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { shortLinks } from "../data/data";

const UrlForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  // const [loader, setLoader] = useState(false);
  const [linksData, setLinksData] = useState(shortLinks);

  function handleText(e) {
    // const expression =
    //   /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    // const regex = new RegExp(expression);

    // if (text.match(regex)) {
    //   console.log(text);
    // }

    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // check if text is empty
    if (text === "") {
      setError(true);
    } else if (text !== "") {
      setError(false);
    }

    fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
      .then((res) => res.json())
      .then((data) => {
        setLinksData([
          {
            id: uuidv4(),
            actualLink: data.result.original_link,
            shortLink: data.result.short_link,
          },
          ...linksData,
        ]);
      });

    setText("");
  }

  function deleteGeneratedLink(id) {
    setLinksData(
      linksData.filter((link) => {
        return link.id !== id;
      })
    );
  }

  return (
    <section className="pb-12">
      <div className="container mx-auto px-2 relative -top-14 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-4 bg-pattren bg-DarkViolet py-10 px-4 rounded-xl md:flex-row">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`w-full rounded-lg p-3 focus:outline-none ${
                error
                  ? "outline outline-1 outline-red-500 placeholder:text-red-500"
                  : "placeholder:text-Gray outline-none"
              }`}
              value={text}
              onChange={handleText}
            />
            <Button version={true} style="w-36 rounded-md">
              Shorten It!
            </Button>
          </div>
        </form>
        <div className="py-8 space-y-4">
          <AnimatePresence>
            {linksData.map((linksObj) => (
              <motion.div
                key={linksObj.id}
                initial={{ x: -30 }}
                animate={{ x: 0 }}
                exit={{ x: 60, opacity: 0 }}
              >
                <ShortUrlList
                  key={linksObj.id}
                  linksData={linksObj}
                  handleDelete={deleteGeneratedLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UrlForm;
