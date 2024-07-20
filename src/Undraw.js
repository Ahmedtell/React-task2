export default function Undraw() {
    return (
        <div>
            <div className="container"
                style={{
                    marginTop: "200px",
                    display: 'flex',
                }}>
                {/* Start Undraw Content */}
                <div
                    style={{
                        width: "40%",
                        marginLeft: "120px",
                        marginRight: "120px",
                    }}
                >
                    <div
                    style={{
                        textAlign: "left",
                        marginBottom: "70px",
                    }}
                    >
                        <p
                        style={{
                            fontSize: "36px",
                            color: "#091133",
                            fontWeight: "500",
                        }}
                        >
                            Light, Fast & Powerful
                        </p>
                        <p
                        style={{
                            color: "#6F7CB2",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                        }}
                        >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p
                        style={{
                            color: "#6F7CB2",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "26px",
                        }}
                        >mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "30px",
                        }}
                    >
                        <div
                            style={{
                                textAlign: "left"
                            }}
                        >
                            <img src={require("./pictures/logo.png")} alt="logo"></img>
                            <p
                            style={{
                                color: "#091133",
                                fontWeight: "500",
                            }}
                            >Title Goes Here</p>
                            <p
                            style={{
                                color: "#5D6970",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "400",
                            }}
                            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                        <div
                            style={{
                                textAlign: "left"
                            }}
                        >
                            <img src={require("./pictures/logo.png")} alt="logo"></img>
                            <p
                            style={{
                                color: "#091133",
                                fontWeight: "500",
                            }}
                            >Title Goes Here</p>
                            <p
                            style={{
                                color: "#5D6970",
                                fontSize: "12px",
                                lineHeight: "18px",
                                fontWeight: "400",
                            }}
                            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                        </div>
                    </div>
                </div>
                {/* End Undraw Content */}
                {/* Start Undraw Image */}
                <div
                    style={{
                        position: "relative",
                        
                        width: "540px",
                        height: "524px",
                    }}>
                    <img src={require("./pictures/undraw_mobile_login_ikmv.png")} alt="landing"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    ></img>
                </div>
                {/* End Undraw Image */}
            </div>
        </div>
    );
}