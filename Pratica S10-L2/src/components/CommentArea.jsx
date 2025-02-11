import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Effettua il fetch dei commenti quando il valore di asin cambia
  useEffect(() => {
    if (asin) {
      setIsLoading(true);
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
        },
      })
        .then((response) => {
          console.log(response); // Log della risposta
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nel recupero dei commenti");
          }
        })
        .then((data) => {
          setComments(data);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((error) => {
          console.log(error); // Log dell'errore
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />} {/* Mostra il loader se i dati sono in caricamento */}
      {isError && <Error />} {/* Mostra un messaggio di errore se qualcosa va storto */}
      <AddComment asin={asin} /> {/* Componente per aggiungere un nuovo commento */}
      <CommentList commentsToShow={comments} /> {/* Lista dei commenti recuperati */}
    </div>
  );
};

export default CommentArea;
