import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {

 const {data, error, isLoading } =  useQuery({
    queryFn: () => fetch('http://http//localhost:2000/test').then(res => res.json())
  })
  if (isLoading) return <h1>Loading..</h1>;
  if (error) return <h2>errror</h2>;
  return <div>{data.name}</div>;
}

export default App;
