const jsonPlaceHolderApi = "https://jsonplaceholder.typicode.com/posts/";

const getData = async () => {
  const res = await fetch(jsonPlaceHolderApi);
  const data = await res.json();
  return data;
};

const LearnUseFtech = async () => {
  const dataFromApi = await getData();
  // console.log(dataFromApi);
  return <div>LearnUseFtech</div>;
};
export default LearnUseFtech;
