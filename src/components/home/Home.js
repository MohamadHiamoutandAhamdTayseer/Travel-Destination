import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
// import Tours from "../tours/Tours";

// const toursData = require("../data/db.json");

function Home(props) {
    return (
        <>
            <Header />
            <Tours />
            <Footer />
        </>
    )
}

export default Home;