import { useState } from "react";
import FAQ from "./FAQ";
import "./App.css";
import "./FAQ.css";

export default function App() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [showType, setShowType] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const sliderImages = [
    { url: "https://image.tmdb.org/t/p/original/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", caption: "New Movies!" },
    { url: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", caption: "New Series!" },
    { url: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", caption: "Biggest Hits!" }
  ];

  const nextSlide = () => {
    setSliderIndex((sliderIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setSliderIndex((sliderIndex - 1 + sliderImages.length) % sliderImages.length);
  };

   const allTitles = [
  { title: "The Godfather", type: "movie", year: "1972", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { title: "The Dark Knight", type: "movie", year: "2008", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { title: "Pulp Fiction", type: "movie", year: "1994", image: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg" },
  { title: "Forrest Gump", type: "movie", year: "1994", image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
  { title: "Inception", type: "movie", year: "2010", image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { title: "Fight Club", type: "movie", year: "1999", image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { title: "The Shawshank Redemption", type: "movie", year: "1994", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
  { title: "Schindler's List", type: "movie", year: "1993", image: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg" },
  { title: "The Matrix", type: "movie", year: "1999", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { title: "Star Wars: Episode IV – A New Hope", type: "movie", year: "1977", image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", type: "movie", year: "2001", image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
  { title: "The Lord of the Rings: The Two Towers", type: "movie", year: "2002", image: "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg" },
  { title: "The Lord of the Rings: The Return of the King", type: "movie", year: "2003", image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" },
  { title: "Interstellar", type: "movie", year: "2014", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "Gladiator", type: "movie", year: "2000", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { title: "Avatar", type: "movie", year: "2009", image: "https://image.tmdb.org/t/p/w500/kmeu6LJR7NmQxtW4ZMVFyF82xnr.jpg" },
  { title: "Titanic", type: "movie", year: "1997", image: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg" },
  { title: "Jurassic Park", type: "movie", year: "1993", image: "https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg" },
  { title: "The Lion King", type: "movie", year: "1994", image: "https://image.tmdb.org/t/p/w500/2bCrlzXH4ehBVO3w0c09klh14Ls.jpg" },
  { title: "Back to the Future", type: "movie", year: "1985", image: "https://image.tmdb.org/t/p/w500/pTpxQBdnw6wYyFnL1Ycu8ppxxPz.jpg" },
  { title: "Toy Story", type: "movie", year: "1995", image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg" },
  { title: "Toy Story 2", type: "movie", year: "1999", image: "https://image.tmdb.org/t/p/w500/rGfLUJPC5vACAxYdyYZ1lWV8uPS.jpg" },
  { title: "Finding Nemo", type: "movie", year: "2003", image: "https://image.tmdb.org/t/p/w500/zgwx2Brwme4ZX5z33KxoshoVVG9.jpg" },
  { title: "Up", type: "movie", year: "2009", image: "https://image.tmdb.org/t/p/w500/pKawSV9pTimesevhsG1NB5pOlGG.jpg" },
  { title: "Coco", type: "movie", year: "2017", image: "https://image.tmdb.org/t/p/w500/8wRX4JfYMJDTiRbYOuTFgLaWvYz.jpg" },
  { title: "Spirited Away", type: "movie", year: "2001", image: "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg" },
  { title: "Parasite", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { title: "Whiplash", type: "movie", year: "2014", image: "https://image.tmdb.org/t/p/w500/7BWkGwbbdVYYr2Va7kH8suD8bVp.jpg" },
  { title: "The Prestige", type: "movie", year: "2006", image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg" },
  { title: "Mad Max: Fury Road", type: "movie", year: "2015", image: "https://image.tmdb.org/t/p/w500/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg" },
  { title: "The Departed", type: "movie", year: "2006", image: "https://image.tmdb.org/t/p/w500/3yX1oGf5FTTe3XNzG4rXv9EA7Fv.jpg" },
  { title: "Deadpool", type: "movie", year: "2016", image: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qDuck6o.jpg" },
  { title: "Avengers: Endgame", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
  { title: "Black Panther", type: "movie", year: "2018", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Guardians of the Galaxy", type: "movie", year: "2014", image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJnZAlYlQXA6.jpg" },
  { title: "Iron Man", type: "movie", year: "2008", image: "https://image.tmdb.org/t/p/w500/dA1arjRySWZTRXzGxxVl9YeuSN.jpg" },
  { title: "The Avengers", type: "movie", year: "2012", image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
  { title: "The Social Network", type: "movie", year: "2010", image: "https://image.tmdb.org/t/p/w500/58oJzoA2S3rHG4r0Q6lBi5Ai3we.jpg" },
  { title: "La La Land", type: "movie", year: "2016", image: "https://image.tmdb.org/t/p/w500/xxyJdZCASY0PAWkY56zAsRLQICM.jpg" },
  { title: "The Grand Budapest Hotel", type: "movie", year: "2014", image: "https://image.tmdb.org/t/p/w500/AbKJsZSLFcNL2YGXopWmMTbd00r.jpg" },
  { title: "Moonlight", type: "movie", year: "2016", image: "https://image.tmdb.org/t/p/w500/2CPkw4FHVsm9ytbZskPwQDBh7W8.jpg" },
  { title: "La vita è bella", type: "movie", year: "1997", image: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg" },
  { title: "Cinema Paradiso", type: "movie", year: "1988", image: "https://image.tmdb.org/t/p/w500/28WjlSeQo0CUNRLujUqLKi9dvIt.jpg" },
  { title: "City of God", type: "movie", year: "2002", image: "https://image.tmdb.org/t/p/w500/4SvzAMa1j1XBpvEDCUV6wdwxKDp.jpg" },
  { title: "Oldboy", type: "movie", year: "2003", image: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg" },
  { title: "The Truman Show", type: "movie", year: "1998", image: "https://image.tmdb.org/t/p/w500/2tN6F2vSvT7D9R0weIzfTr1oVUS.jpg" },
  { title: "The Usual Suspects", type: "movie", year: "1995", image: "https://image.tmdb.org/t/p/w500/1uBhfUJFYMmS0FZoYb7wX0Gfplo.jpg" },
  { title: "Se7en", type: "movie", year: "1995", image: "https://image.tmdb.org/t/p/w500/69Sns8woLr5Amph5CLs8ExGzDIs.jpg" },
  { title: "Django Unchained", type: "movie", year: "2012", image: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg" },
  { title: "Inglourious Basterds", type: "movie", year: "2009", image: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg" },
  { title: "Breaking Bad", type: "series", year: "2008–2013", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
  { title: "Game of Thrones", type: "series", year: "2011–2019", image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
  { title: "The Wire", type: "series", year: "2002–2008", image: "https://image.tmdb.org/t/p/w500/EXW4NihOnu-9vM3jl0IUvdmTDOb.jpg" },
  { title: "The Sopranos", type: "series", year: "1999–2007", image: "https://image.tmdb.org/t/p/w500/vLtHptB7gvD8v2K1tivxF18Edg3.jpg" },
  { title: "Friends", type: "series", year: "1994–2004", image: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg" },
  { title: "Seinfeld", type: "series", year: "1989–1998", image: "https://image.tmdb.org/t/p/w500/1zEgDpbVtej0g7K05DqvAvKFQQR.jpg" },
  { title: "Sherlock", type: "series", year: "2010–2017", image: "https://image.tmdb.org/t/p/w500/9LGh30rViLR0GDc0MFZKzC7Ke4y.jpg" },
  { title: "The Simpsons", type: "series", year: "1989–present", image: "https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9N9Zi1P.jpg" },
  { title: "Avatar: The Last Airbender", type: "series", year: "2005–2008", image: "https://image.tmdb.org/t/p/w500/lY2pwq32kQZmKTPvU8mzIKy4ZOH.jpg" },
  { title: "Stranger Things", type: "series", year: "2016–present", image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
  { title: "The Crown", type: "series", year: "2016–present", image: "https://image.tmdb.org/t/p/w500/1on2MsWSu55GMWJJGIVsaqO8FM4.jpg" },
  { title: "The Mandalorian", type: "series", year: "2019–present", image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
  { title: "Black Mirror", type: "series", year: "2011–present", image: "https://image.tmdb.org/t/p/w500/ekUKmdBs7avDIljku0karoAsmVo.jpg" },
  { title: "The Office (US)", type: "series", year: "2005–2013", image: "https://image.tmdb.org/t/p/w500/qrY7p7Yl7Xr6MS9D8Z3IYkJO6kX.jpg" },
  { title: "The Office (UK)", type: "series", year: "2001–2003", image: "https://image.tmdb.org/t/p/w500/jXfsoaKcHkP1iyb73Tx8B6AbYee.jpg" },
  { title: "House of Cards", type: "series", year: "2013–2018", image: "https://image.tmdb.org/t/p/w500/zDz0RyyZHGjL3vFJ7V2RafSSmH4.jpg" },
  { title: "Ozark", type: "series", year: "2017–2022", image: "https://image.tmdb.org/t/p/w500/pX8Jn3UFEQ8GbX1wSF1Ny2YE80l.jpg" },
  { title: "Better Call Saul", type: "series", year: "2015–2022", image: "https://image.tmdb.org/t/p/w500/oC81CE6UHYvAlZVaUi0LXbNSgAI.jpg" },
  { title: "Westworld", type: "series", year: "2016–present", image: "https://image.tmdb.org/t/p/w500/27l3NOvz4uBo0OONZgH5f5H6LTI.jpg" },
  { title: "Mindhunter", type: "series", year: "2017–2019", image: "https://image.tmdb.org/t/p/w500/2xhzED2ZsCBSSWFTtvJVtWIcBJT.jpg" },
  { title: "Lost", type: "series", year: "2004–2010", image: "https://image.tmdb.org/t/p/w500/9FtlUnryreJCvitAukWuNHZiB2B.jpg" },
  { title: "Grey's Anatomy", type: "series", year: "2005–present", image: "https://image.tmdb.org/t/p/w500/x7KrlaUjd2s4Gfy0iNKGJPkykuO.jpg" },
  { title: "True Detective", type: "series", year: "2014–present", image: "https://image.tmdb.org/t/p/w500/ouQiUwAmWKMQ4XnsyZWJUzd5Sc8.jpg" },
  { title: "The Handmaid's Tale", type: "series", year: "2017–present", image: "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" },
  { title: "Vikings", type: "series", year: "2013–2020", image: "https://image.tmdb.org/t/p/w500/mM8f6aocks4sqxPbN8XT8WMRLGN.jpg" },
  { title: "Narcos", type: "series", year: "2015–2017", image: "https://image.tmdb.org/t/p/w500/9oQ6j2k8d1b0z3c4aX9mZt0y4e.jpg" },
  { title: "The Witcher", type: "series", year: "2019–present", image: "https://image.tmdb.org/t/p/w500/6Xh3b1d2k5Z7m4c8z9j0Y2y4e5.jpg" },
  { title: "Money Heist", type: "series", year: "2017–2021", image: "https://image.tmdb.org/t/p/w500/4sQ2k5b0z3c4aX9mZt0y4e5.jpg" },
  { title: "Shutter Island", type: "movie", year: "2010", image: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg" },
{ title: "Money Heist", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg" },
{ title: "The Crown", type: "series", year: "2016", image: "https://image.tmdb.org/t/p/w500/ltzypzjHL5Cdb3oGE3RRYYsWJcw.jpg" },
{ title: "The Good Place", type: "series", year: "2016", image: "https://image.tmdb.org/t/p/w500/dzAi7bXfojWdY9CjB9d1t4EL5no.jpg" },
{ title: "The Umbrella Academy", type: "series", year: "2019", image: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" },
{ title: "Narcos", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg" },
{ title: "BoJack Horseman", type: "series", year: "2014", image: "https://image.tmdb.org/t/p/w500/ekaa7YjGPTkFLcPhwWxtjuhyLEc.jpg" },
{ title: "The Witcher", type: "series", year: "2019", image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" },
{ title: "Lucifer", type: "series", year: "2016", image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" },
{ title: "Dark", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg" },
{ title: "Vikings", type: "series", year: "2013", image: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" },
{ title: "13 Reasons Why", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/c0vpxbRMC6t96m1H0DqJJtzylGH.jpg" },
{ title: "Brooklyn Nine-Nine", type: "series", year: "2013", image: "https://image.tmdb.org/t/p/w500/h3f8DkOPZ7PJJ2kNJQYT4LtD6Gu.jpg" },
{ title: "The Queen's Gambit", type: "series", year: "2020", image: "https://image.tmdb.org/t/p/w500/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg" },
{ title: "Daredevil", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg" },
{ title: "Jessica Jones", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/tEeAnX86Q3VnReayl1Yfp2U4FPZ.jpg" },
{ title: "The Punisher", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/yf7BL4n2W2nLeJpDDw11uSb3ee.jpg" },
{ title: "Ozark", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg" },
{ title: "Gotham", type: "series", year: "2014", image: "https://image.tmdb.org/t/p/w500/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg" },
{ title: "Legion", type: "series", year: "2017", image: "https://image.tmdb.org/t/p/w500/9nxEo6f4mERKx4I9aZqZUgLq8sh.jpg" },
{ title: "Peaky Blinders", type: "series", year: "2013", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" },
{ title: "Mr. Robot", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg" },
{ title: "Arrow", type: "series", year: "2012", image: "https://image.tmdb.org/t/p/w500/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg" },
{ title: "The Flash", type: "series", year: "2014", image: "https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg" },
{ title: "Supergirl", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/2z1tEIvGHiClBGo0CLOA0SopSqI.jpg" },
{ title: "Titans", type: "series", year: "2018", image: "https://image.tmdb.org/t/p/w500/eeHI5iBSCOxj4HGSOmFM6azBmwb.jpg" },
{ title: "The Boys", type: "series", year: "2019", image: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg" },
{ title: "The Expanse", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/tDkgKx1bjrh6vPy1ZSzKoQnWZ2b.jpg" },
{ title: "Black Mirror", type: "series", year: "2011", image: "https://image.tmdb.org/t/p/w500/pXeuSWSKgWdT2p9tZ1iZPBz2CzJ.jpg" },
{ title: "Better Call Saul", type: "series", year: "2015", image: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg" },
{ title: "The Mandalorian", type: "series", year: "2019", image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
{ title: "The Book of Boba Fett", type: "series", year: "2021", image: "https://image.tmdb.org/t/p/w500/2zGzw3FkyZ6nLzAJ7t3WMrObEld.jpg" },
{ title: "Moon Knight", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg" },
{ title: "Loki", type: "series", year: "2021", image: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg" },
{ title: "WandaVision", type: "series", year: "2021", image: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg" },
{ title: "Hawkeye", type: "series", year: "2021", image: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg" },
{ title: "She-Hulk: Attorney at Law", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg" },
{ title: "House of the Dragon", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg" },
{ title: "The Rings of Power", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg" },
{ title: "Ms. Marvel", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/mZL5bEIQVeZJxC4QIQ3T20LsmHh.jpg" },
{ title: "Obi-Wan Kenobi", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/c7dFSqZQYqNNJVpacpIGZe3gkLW.jpg" },
{ title: "Andor", type: "series", year: "2022", image: "https://image.tmdb.org/t/p/w500/59ZyCDP2k9xIeFzH1r2yXy3SPOj.jpg" },
{ title: "Moonlight", type: "movie", year: "2016", image: "https://image.tmdb.org/t/p/w500/piITcqfl3zBrEUGDHz3tkT6tVCi.jpg" },
{ title: "Joker", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
{ title: "1917", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg" },
{ title: "Soul", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg" },
{ title: "Tenet", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
{ title: "Everything Everywhere All at Once", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg" },
{ title: "Glass Onion: A Knives Out Mystery", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg" },
{ title: "Top Gun: Maverick", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
{ title: "The Batman", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
{ title: "Prey", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg" },
{ title: "Nope", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg" },
{ title: "The Whale", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg" },
{ title: "Elvis", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg" },
{ title: "RRR", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/dliqupb3H1ZAf5gTVvmd91wSVEy.jpg" },
{ title: "The Northman", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg" },
{ title: "Turning Red", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg" },
{ title: "Black Panther: Wakanda Forever", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
{ title: "Avatar: The Way of Water", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
{ title: "Doctor Strange in the Multiverse of Madness", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" },
{ title: "The Gray Man", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg" },
{ title: "The Menu", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/vtDKNm5KfMd5JUxH3F7O7esqx0x.jpg" },
{ title: "The Fabelmans", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg" },
{ title: "Bullet Train", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg" },
{ title: "The Woman King", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg" },
{ title: "Babylon", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/wOXKcQh8IvfDqgYzPzxR6yQxQsU.jpg" },
{ title: "The Banshees of Inisherin", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg" },
{ title: "Pinocchio", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/fqv8e4UloY6zQepyvrS4lF2dY3Q.jpg" },
{ title: "The Sea Beast", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg" },
{ title: "Luck", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/1HOYvwGFioUFL58UVvDRG6beEDm.jpg" },
{ title: "Sonic the Hedgehog 2", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg" },
{ title: "The Adam Project", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg" },
{ title: "Day Shift", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/ayQM3Yyq3grRbtn3OMZh76z3EAr.jpg" },
{ title: "The School for Good and Evil", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9f5sIJejS9sU5rP6D6hFV0mYuVV.jpg" },
{ title: "Enola Holmes 2", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg" },
{ title: "Matilda the Musical", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg" },
{ title: "Uncharted", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg" },
{ title: "The Lost City", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg" },
{ title: "Amsterdam", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg" },
{ title: "Ambulance", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/tuw8HNUKFT0v4E1aOYwZQkS1LRm.jpg" },
{ title: "The Pale Blue Eye", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg" },
{ title: "The Black Phone", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9PfzVtUq7ZmvG3y2YxemEFIm3Ut.jpg" },
{ title: "Smile", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg" },
{ title: "Fresh", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/tLU5uB1y5cRWhQD2qkR88A1TxeD.jpg" },
{ title: "X", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg" },
{ title: "Pearl", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" },
{ title: "Men", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/jXBFOQabC9iKx2sOtUnyoS0U3Mb.jpg" },
{ title: "Watcher", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/5G2QkIpIjgR1t1r7c4iFYvZzqgE.jpg" },
{ title: "Resurrection", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/pjKZ7nEDGUL8UFy7Mb18KQdqpzF.jpg" },
{ title: "Blonde", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/jOqxKIOC92BVyxxAA0RZeo5naEE.jpg" },
{ title: "Causeway", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/cjQpEulEoE2qgnU6yXmCslx6BtR.jpg" },
{ title: "Empire of Light", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/ovdU1rGQORBLqV4lETt12g2dnEb.jpg" },
{ title: "TÁR", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/dRVAlaU0vbG6hMf2K45NSiIyoUe.jpg" },
{ title: "Triangle of Sadness", type: "movie", year: "2022", image: "https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg" },
{ title: "Knives Out", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg" },
{ title: "Joker", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
{ title: "Parasite", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
{ title: "1917", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg" },
{ title: "Ford v Ferrari", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg" },
{ title: "Once Upon a Time in Hollywood", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg" },
{ title: "Marriage Story", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYw10wN84Hp8d.jpg" },
{ title: "Little Women", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg" },
{ title: "The Irishman", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/wO5QSWZPzPz6p8yqrxp1GQYnFEP.jpg" },
{ title: "Jojo Rabbit", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg" },
{ title: "Tenet", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
{ title: "Soul", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg" },
{ title: "Promising Young Woman", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/cjzU4g6SlScnP4MdkleyI25KGlR.jpg" },
{ title: "The Trial of the Chicago 7", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/ahf5cVdooMAlDRiJOZQNuLqa1Is.jpg" },
{ title: "Palm Springs", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg" },
{ title: "Sound of Metal", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/yBKuEDWQ7PYuG5yLCEfHKB0y7de.jpg" },
{ title: "Nomadland", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg" },
{ title: "Minari", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg" },
{ title: "Another Round", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" },
{ title: "News of the World", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/fYQCgVRsQteP4UArlhyhWl9kk85.jpg" },
{ title: "The Father", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/uxz7bH3TnVwG0FOf8TJAuQU0YkC.jpg" },
{ title: "The Dig", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kFBAXUMnqkdmZbCoD9OES3g6Dfz.jpg" },
{ title: "The Mitchells vs. The Machines", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/mI2JyoEoG0lCRwUsxR8p5doe3QK.jpg" },
{ title: "Luca", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg" },
{ title: "Cruella", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg" },
{ title: "The French Dispatch", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg" },
{ title: "Free Guy", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg" },
{ title: "Encanto", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
{ title: "Dune", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
{ title: "Coda", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/2JmfwHrUbAjXoqVscMwSasjw4sY.jpg" },
{ title: "King Richard", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/b8RocwzLkP96fC9WX3TWnF2mO9k.jpg" },
{ title: "The Last Duel", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/zjrJE0fpzPvWehqjefwqszxdKFZ.jpg" },
{ title: "The Green Knight", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/xdf5v4CqPp2byJwzAgGq3Bvc4mY.jpg" },
{ title: "Red Notice", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg" },
{ title: "Don't Look Up", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/th4E0f6y3yJv97Az6FQm5N1pY1g.jpg" },
{ title: "The Power of the Dog", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kEyWYZW0e2QTMjP7W4j3D4T6jzq.jpg" },
{ title: "House of Gucci", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/9FxNW2O0gCnnmslL29xbrrZLp7F.jpg" },
{ title: "Spencer", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7GcqdBKaMMNVu2r3cJLCIEMTlQx.jpg" },
{ title: "West Side Story", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
{ title: "Belfast", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/nULXhDSyztl5Z4V8ZrVVACvKxyM.jpg" },
{ title: "Nightmare Alley", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/680klE0dIreQQOyWKFgNnCAJtws.jpg" },
{ title: "The Tender Bar", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/m2D3gaK2a4U1Czske0U8wewVvng.jpg" },
{ title: "Being the Ricardos", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7tuCv3j6vM9fTfxpL1tdmSWk5Dw.jpg" },
{ title: "tick, tick... BOOM!", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/bo2F2PojlXeB8dBzmW2hvCqF7Yp.jpg" },
{ title: "Wrath of Man", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/M7SUK85sKjaStg4TKhlAVyGlz3.jpg" },
{ title: "The Guilty", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/1D1vfuK1fhtg1TYwWmkd9HLUZiK.jpg" },
{ title: "No Time to Die", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg" },
{ title: "A Quiet Place Part II", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg" },
{ title: "The Suicide Squad", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg" },
{ title: "Knives Out", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg" },
{ title: "Joker", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
{ title: "Parasite", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
{ title: "1917", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg" },
{ title: "Ford v Ferrari", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg" },
{ title: "Once Upon a Time in Hollywood", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg" },
{ title: "Marriage Story", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/pZekG6xabTmZxjmYw10wN84Hp8d.jpg" },
{ title: "Little Women", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg" },
{ title: "The Irishman", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/wO5QSWZPzPz6p8yqrxp1GQYnFEP.jpg" },
{ title: "Jojo Rabbit", type: "movie", year: "2019", image: "https://image.tmdb.org/t/p/w500/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg" },
{ title: "Tenet", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
{ title: "Soul", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg" },
{ title: "Promising Young Woman", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/cjzU4g6SlScnP4MdkleyI25KGlR.jpg" },
{ title: "The Trial of the Chicago 7", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/ahf5cVdooMAlDRiJOZQNuLqa1Is.jpg" },
{ title: "Palm Springs", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg" },
{ title: "Sound of Metal", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/yBKuEDWQ7PYuG5yLCEfHKB0y7de.jpg" },
{ title: "Nomadland", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg" },
{ title: "Minari", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg" },
{ title: "Another Round", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" },
{ title: "News of the World", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/fYQCgVRsQteP4UArlhyhWl9kk85.jpg" },
{ title: "The Father", type: "movie", year: "2020", image: "https://image.tmdb.org/t/p/w500/uxz7bH3TnVwG0FOf8TJAuQU0YkC.jpg" },
{ title: "The Dig", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kFBAXUMnqkdmZbCoD9OES3g6Dfz.jpg" },
{ title: "The Mitchells vs. The Machines", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/mI2JyoEoG0lCRwUsxR8p5doe3QK.jpg" },
{ title: "Luca", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg" },
{ title: "Cruella", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg" },
{ title: "The French Dispatch", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg" },
{ title: "Free Guy", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg" },
{ title: "Encanto", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
{ title: "Dune", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
{ title: "Coda", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/2JmfwHrUbAjXoqVscMwSasjw4sY.jpg" },
{ title: "King Richard", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/b8RocwzLkP96fC9WX3TWnF2mO9k.jpg" },
{ title: "The Last Duel", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/zjrJE0fpzPvWehqjefwqszxdKFZ.jpg" },
{ title: "The Green Knight", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/xdf5v4CqPp2byJwzAgGq3Bvc4mY.jpg" },
{ title: "Red Notice", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg" },
{ title: "Don't Look Up", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/th4E0f6y3yJv97Az6FQm5N1pY1g.jpg" },
{ title: "The Power of the Dog", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kEyWYZW0e2QTMjP7W4j3D4T6jzq.jpg" },
{ title: "House of Gucci", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/9FxNW2O0gCnnmslL29xbrrZLp7F.jpg" },
{ title: "Spencer", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7GcqdBKaMMNVu2r3cJLCIEMTlQx.jpg" },
{ title: "West Side Story", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
{ title: "Belfast", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/nULXhDSyztl5Z4V8ZrVVACvKxyM.jpg" },
{ title: "Nightmare Alley", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/680klE0dIreQQOyWKFgNnCAJtws.jpg" },
{ title: "The Tender Bar", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/m2D3gaK2a4U1Czske0U8wewVvng.jpg" },
{ title: "Being the Ricardos", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/7tuCv3j6vM9fTfxpL1tdmSWk5Dw.jpg" },
{ title: "tick, tick... BOOM!", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/bo2F2PojlXeB8dBzmW2hvCqF7Yp.jpg" },
{ title: "Wrath of Man", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/M7SUK85sKjaStg4TKhlAVyGlz3.jpg" },
{ title: "The Guilty", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/1D1vfuK1fhtg1TYwWmkd9HLUZiK.jpg" },
{ title: "No Time to Die", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg" },
{ title: "A Quiet Place Part II", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg" },
{ title: "The Suicide Squad", type: "movie", year: "2021", image: "https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg" }

  
];

  const titlesPerPage = 12;
  const filtered = allTitles.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = !showType || item.type === showType;
    return matchesSearch && matchesType;
  });

  const pageCount = Math.ceil(filtered.length / titlesPerPage);
  const startIndex = (page - 1) * titlesPerPage;
  const currentPageItems = filtered.slice(startIndex, startIndex + titlesPerPage);

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(pageCount, p + 1));

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      {/* Slider section */}
      <div style={{ marginBottom: 20 }}>
        <img
          src={sliderImages[sliderIndex].url}
          alt={sliderImages[sliderIndex].caption}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "12px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          <button onClick={prevSlide}>◀ Prev</button>
          <span>{sliderImages[sliderIndex].caption}</span>
          <button onClick={nextSlide}>Next ▶</button>
        </div>
      </div>

      <h1>🎬 Movie & Series Explorer</h1>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => { setShowType(""); setPage(1); }} style={{ margin: 5 }}>All</button>
        <button onClick={() => { setShowType("movie"); setPage(1); }} style={{ margin: 5 }}>Movies</button>
        <button onClick={() => { setShowType("series"); setPage(1); }} style={{ margin: 5 }}>Series</button>
      </div>

      <input
        type="text"
        placeholder="Search for a title..."
        value={search}
        onChange={e => { setSearch(e.target.value); setPage(1); }}
        style={{ margin: "10px 0", padding: 8, width: 400 }}
      />

      <div className="fade-container fade-in" key={page + search + showType}>
        {currentPageItems.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 20
          }}>
            {currentPageItems.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: "#444",
                  color: "white",
                  borderRadius: 12,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 16,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease"
                }}
                onClick={() => item.image && setModalImage(item.image)}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                  zIndex: 0
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
  <img
    src={item.image}
    alt={item.title}
    style={{
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "8px"
    }}
  />
  <h3>{item.title}</h3>
  <p>{item.type === "movie" ? "Movie" : "Series"} • {item.year}</p>
</div>

              </div>
            ))}
          </div>
        ) : (
          <p>No matches for “{search}”</p>
        )}
      </div>

      {pageCount > 1 && (
        <div style={{ marginTop: 20 }}>
          <button onClick={handlePrev} disabled={page === 1} style={{ marginRight: 10 }}>◀ Prev</button>
          <span>Page {page} of {pageCount}</span>
          <button onClick={handleNext} disabled={page === pageCount} style={{ marginLeft: 10 }}>Next ▶</button>
        </div>
      )}

      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <img src={modalImage} alt="Enlarged poster" style={{ maxHeight: "90%", borderRadius: 8 }} />
        </div>
      )}

      <FAQ />
    </div>
  );
}
