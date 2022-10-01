const deleteData = async (config) => {
    return await axios(config);
};


const delData = () => {
    deleteData({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:'delete',
    })
    .then((res) => {
    console.log(res.data);
  })
  .error((err) => {
    console.log(err);
  });
}

delData();
// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
