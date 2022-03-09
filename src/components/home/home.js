import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./home.css";
import { userdata } from "../../api/firstlogin";

function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = document.getElementById("userID").value;
    const username = userid.toUpperCase();
    const password = document.getElementById("password").value;
    console.log(username, password);
    const result = await userdata(username, password);
    console.log(result);
  };
  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <div className="homewrapper">
          <div className="formbox">
            <form action="" onSubmit={handleSubmit} autoComplete="off">
              <h1>Customer Login</h1>
              <input
                type="text"
                className="cid"
                id="userID"
                placeholder="Customer Id"
                required
              />
              <br />
              <input
                type="password"
                className="cpass"
                id="password"
                placeholder="Password"
                required
              />
              <br />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
