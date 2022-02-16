import { useParams, Route } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Andy",
    text: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: "q2",
    author: "Harriet",
    text: "It's better to have a full bottle in front of me, than a full frontal lobotomy.",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Error - Could not find quote with id: {params.quoteId}</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
