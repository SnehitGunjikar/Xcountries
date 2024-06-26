
import { useState, useEffect } from "react";

const Tile = ({ flagUrl, name, altFlag }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "8px",
                flexDirection: "column",
                width: "200px"
            }}
        >
            <img
                src={flagUrl}
                alt={altFlag}
                style={{ width: "100px", height: "100px" }}
            />
            <h2>{name}</h2>
        </div>
    );
};

function Countries() {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // console.log({ countries });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexWrap: "wrap",
            }}
        >
            {countries.map((country) => (
                <Tile
                    key={country.id}
                    flagUrl={country.flag}
                    name={country.name}
                    altFlag={country.abbr || `Flag of ${country.name}`}
                />
            ))}
        </div>
    );
}

export default Countries;
