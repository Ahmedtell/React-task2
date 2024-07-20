export default function Intro2(){
    return(
        <div>
            <div className="container"
            style={{
                marginLeft: "120px",
                marginRight: "120px",
                marginTop: "200px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
                <div
                style={{
                    width: "480px",
                    height: "315px",
                }}
                >
                    <img src={require("./pictures/undraw_social_influencer_sgsv.png")} alt="intro2"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    ></img>
                </div>
                {/* Start Intro Content */}
                <div
                style={{
                    width: "40%",
                    textAlign: "left",
                }}
                >
                    <p
                    style={{
                        color: "#091133",
                        fontSize: "36px",
                        // lineHeight: "48px",
                        fontWeight : "500",
                    }}
                    >Light, Fast & Powerful</p>
                    <p
                    style={{
                        lineHeight: "26px",
                        fontWeight: "400",
                        color: "#6F7CB2",
                    }}
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p
                    style={{
                        lineHeight: "26px",
                        fontWeight: "400",
                        color: "#6F7CB2",
                    }}
                    >mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                {/* End Intro Content */}
            </div>
        </div>
    );
}