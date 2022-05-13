const toursData = require("../../data/db.json");

function Tours(props) {
    return (
        <>
            {
                toursData.map(tour => {
                    return (
                        <div style={{ textAlign: "center" }}>
                            <h2>{tour.name}</h2>
                            <img src={tour.image} alt={tour.alt} />
                        </div>
                    )
                })

            }
        </>
    );




}

export default Tours;