import React, { useState, useEffect } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SingleMovie = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  console.log("data ", data);
  useEffect(() => {
    setData(location.state);
  }, [location.state]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeIn",
      },
    },
  };
  return (
    <section id="single">
      <motion.div
        className="p-6 container m-auto"
        variants={variants}
        animate="visible"
        initial="hidden"
      >
        <div className="flex flex-col">
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`}
            className="w-full lg:h-[500px]"
          />
          <div className="flex flex-col mt-6">
            <h1 className="text-4xl font-bold font-eudoxus text-left text-darkGrayishBlue lg:text-6xl">
              {data.title}
            </h1>
            <p className="text-darkGrayishBlue mt-4 text-justify">
              <span className="text-xl font-bold text-darkGrayishBlue lg:text-xl">
                Overview:{" "}
              </span>
              {(" ", data.overview)}
            </p>
            <div className="flex mt-4 md:hidden">
              <div className="flex items-center gap-2">
                <StarOutlineIcon fontSize="medium" sx={{ fill: "goldenrod" }} />
                <p>{data.vote_average}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <CalendarTodayIcon fontSize="medium" sx={{ fill: "red" }} />
                <p>{data.release_date}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <TheatersIcon fontSize="medium" sx={{ fill: "blue" }} />
                <p>{data.media_type}</p>
              </div>
            </div>
            <div className="hidden md:flex md:mt-4">
              <div className="flex items-center gap-2">
                <StarOutlineIcon fontSize="large" sx={{ fill: "goldenrod" }} />
                <p className="text-lg">{data.vote_average}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <CalendarTodayIcon fontSize="large" sx={{ fill: "red" }} />
                <p className="text-lg">{data.release_date}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <TheatersIcon fontSize="large" sx={{ fill: "blue" }} />
                <p className="text-lg">{data.media_type}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SingleMovie;
