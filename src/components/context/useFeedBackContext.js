import { useContext } from "react";
import feedBackContext from "./FeedBackContext";

const useFeedBackContext = () => {
  return useContext(feedBackContext);
}

export default useFeedBackContext