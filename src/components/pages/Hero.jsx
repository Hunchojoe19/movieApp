import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import axios from "axios";

const data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    votes: 678790,
    rating: 9.2,
    rank: 1,
    metascore: 80,
    category: "Thriller",
    director: "Frank Darabont",
    runtime: 142,
    revenue: 28.34,
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    votes: 511495,
    rating: 9.2,
    rank: 2,
    metascore: 100,
    category: "Crime",
    director: "Francis Ford Coppola",
    runtime: 175,
    revenue: 134.97,
    actors: "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    votes: 319352,
    rating: 9.0,
    rank: 3,
    metascore: 90,
    category: "Crime",
    director: "Francis Ford Coppola",
    runtime: 202,
    revenue: 57.3,
    actors: "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    votes: 1839571,
    rating: 9.0,
    rank: 4,
    metascore: 84,
    category: "Action",
    director: "Christopher Nolan",
    runtime: 152,
    revenue: 534.86,
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
  },
];

// const options = {
//   method: "GET",
//   url: "https://movie-database-alternative.p.rapidapi.com/",
//   params: {
//     s: "Avengers Endgame",
//     r: "json",
//     page: "1",
//   },
//   headers: {
//     "X-RapidAPI-Key": "8b0e2549a6mshf618a56d4fdb5eep1b8b4bjsn2a4456c7d5e5",
//     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
//   },
// };
const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/auto-complete",
  params: { q: "game of thr" },
  headers: {
    "X-RapidAPI-Key": "8b0e2549a6mshf618a56d4fdb5eep1b8b4bjsn2a4456c7d5e5",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};
const Hero = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: "-100vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 2,
      },
    },
    exit: {
      y: "-100vw",

      transition: {
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const navigate = useNavigate();
  const handleClick = (id, item) => {
    navigate(`/movie/${id}`, {
      state: item,
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState([]);

  const handleSearch = () => {
    const temp = data.filter((e) =>
      e.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearch(temp);
  };
  useEffect(() => {
    if (value === "") {
      setSearch(data);
    }
  }, [value]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="hero">
      <div className="container mx-auto p-6 flex flex-col">
        <div className="flex flex flex-col mt-4">
          <h1 className="text-4xl font-bold font-eudoxus text-left text-darkGrayishBlue">
            Trending Movies?
          </h1>
          <div className="mt-10 flex ">
            <input
              type="search"
              className="bg-transparent text-xl border border-solid-darkGrayishBlue rounded-lg p-4 w-[300px] outline-none md:w-[500px] lg:w-[600px]"
              placeholder="search movies"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="p-4 ml-1 bg-slate-600 rounded-lg"
              onClick={handleSearch}
            >
              <SearchIcon fontSize="large" />
            </button>
          </div>
          <div className="mt-14 text-darkGrayishBlue">
            <p className="text-lg ml-10">items</p>
          </div>
          <div className="flex mt-20" id="list">
            {search.length ? (
              Array.from(search).map((item) => (
                <motion.div
                  key={item.id}
                  variants={imageVariants}
                  animate="visible"
                  initial="hidden"
                  exit="exit"
                  whileHover="hover"
                  className="flex flex-col mb-[2rem] w-[300px] h-[400px] bg-black rounded shadow-xl cursor-pointer"
                  onClick={() => handleClick(item.id, item)}
                >
                  <img
                    src={item.imageUrl}
                    className="w-full h-[300px] rounded-lg -mt-2"
                  />

                  <p className="text-darkGrayishBlue ml-3">{item.title}</p>
                  <p className="text-darkGrayishBlue ml-3">{item.year}</p>
                  <p className="text-darkGrayishBlue ml-3">{item.category}</p>

                  <div className="ml-3 gap-2 flex items-center">
                    <StarOutlineIcon
                      fontSize="medium"
                      sx={{ fill: "goldenrod" }}
                    />
                    <p>{item.rating}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div>No data</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
