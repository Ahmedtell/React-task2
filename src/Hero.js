export default function Hero(){
    return(
        <div>
            <div className="Container"
            style={{
                marginLeft: "120px",
                marginTop: "100px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            {/* Start Hero Content */}
            <div className="HeroContent"
            style={{
                width: "40%",
                textAlign: "left",
            }}
            >
            <h2
            style={{
                color: "#091133",
                fontSize: "50px",
            }}
            >Introduce Your Product Quickly & Effectively</h2>
            <p
            style={{
                color: "#505F98",
                lineHeight: "30px",
                fontSize: "18px",
            }}
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <p
            style={{
                color: "#505F98",
                lineHeight: "30px",
                fontSize: "18px",
            }}
            >mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div
            style={{
                marginTop: "40px",
            }}
            >
                <button
                style={{
                    border: "none",
                    textAlign: "center",
                    color: "white",
                    fontSize: "16px",
                    backgroundColor: "#111B47",
                    marginRight: "40px",
                    width: "190px",
                    height: "36px",
                }}
                >Purchase UI Kit</button>
                <button
                style={{
                    border: "2px solid #111B47",
                    textAlign: "center",
                    color: "#111B47",
                    fontSize: "16px",
                    backgroundColor: "white",
                    marginRight: "40px",
                    width: "190px",
                    height: "36px",
                }}
                >Learn More</button>
            </div>
            </div>
            {/* End Her Content */}

            {/* Start Hero Image */}
            <div className="HeroImage" 
            style={{
                position: "relative",
                top: "100px",
                width: "600px",
            }}>
                <img src={require("./pictures/designer_1.png")} alt="hero"
                style={{
                    width: "100%",
                }}></img>
            </div>
            {/* End Hero Image */}
            </div>
        </div>
    );
}