import Home from "../Container/Home";

export default function Layout(props){

  const { children } = props;

  return(
    <>
      <Home></Home>
      {children}
    </>
  )
}