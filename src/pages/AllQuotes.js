import QuoteList from "./../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
