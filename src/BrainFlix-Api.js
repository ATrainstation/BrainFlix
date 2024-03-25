const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = "d5f7af9d-5c2e-4325-bdc1-c33027164785";

const BrainFlixApi = (apiKey) => {
  const Url = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  const getShowDates = async () => {
    try {
      const showDatesResponse = await axios.get(
        `${Url}/showdates?api_key=${apiKey}`
      );
      return showDatesResponse.data;
    } catch (err) {
      console.error("Error getting show dates: Try Again", err);
    }
  };

  const getComments = async () => {
    try {
      const commentsResponse = await axios.get(
        `${Url}/comments?api_key=${apiKey}`
      );
      return commentsResponse.data;
    } catch (err) {
      console.error("Error getting comments: Try Again", err);
    }
  };

  const postComment = async (name, comment) => {
    try {
      const postResponse = await axios.post(
        `${Url}/comments?api_key=${apiKey}`,
        { name, comment }
      );
      console.log(postResponse);
      return postResponse;
    } catch (err) {
      console.error("Error posting comment: Try Again", err);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const delPostResponse = await axios.delete(
        `${Url}/comments/${commentId}?=&api_key=${apiKey}`
      );
      console.log("Comment deleted successfully:", delPostResponse);
      return delPostResponse;
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const likeComment = async (commentId) => {
    try {
      const likeResponse = await axios.put(
        `${Url}/comments/${commentId}/like?=&api_key=${apiKey}`
      );
      console.log(likeResponse);
      return likeResponse;
    } catch (err) {
      console.error("Error liking comment: Try Again", err);
    }
  };

  return {
    getShowDates,
    getComments,
    postComment,
    deleteComment,
    likeComment,
  };
};
