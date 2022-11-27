const getArticle = async (req, res) => {
    console.log("this is the controller ");
  };
  const postArticle = async (req, res) => {
    console.log("add Article");
  };
  const putArticle = async (req, res) => {
    console.log("put Article");
  };
  const deleteArticle = async (req, res) => {
    console.log("delete Article");
  };
  module.exports = { getArticle, postArticle, putArticle, deleteArticle };