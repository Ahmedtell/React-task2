export default function Footer() {
    return (
        <div
            style={{
                backgroundColor: "#E7ECFF",
            }}
        >
            <div className="container"
                style={{
                    marginLeft: "120px",
                    marginRight: "120px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            color: "#939EA4",
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "24px",
                        }}
                    >©2023 Yourcompany</p>
                    <p
                        style={{
                            color: "#37447E",
                            fontSize: "26px",
                            lineHeight: "38px",
                            fontWeight: "900",
                        }}
                    >Landing</p>
                    <button
                        style={{
                            border: "none",
                            textAlign: "center",
                            color: "white",
                            fontSize: "12px",
                            backgroundColor: "#111B47",
                            width: "109px",
                            height: "26px",
                        }}
                    >Purchase Now</button>
                </div>
                <hr
                    style={{
                        color: "#CDD1D4",
                    }}
                ></hr>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <ul
                        style={{
                            position: "relative",
                            left: "-40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            listStyle: "none",
                        }}
                    >
                        <li
                            style={{
                                marginRight: "40px",
                                color: "#929ECC",
                                fontSize: "14px",
                                lineHeight: "24px",
                                fontWeight: "400",
                            }}
                        >Home</li>
                        <li
                            style={{
                                marginRight: "40px",
                                color: "#929ECC",
                                fontSize: "14px",
                                lineHeight: "24px",
                                fontWeight: "400",
                            }}
                        >About</li>
                        <li
                            style={{
                                marginRight: "40px",
                                color: "#929ECC",
                                fontSize: "14px",
                                lineHeight: "24px",
                                fontWeight: "400",
                            }}
                        >Contact</li>
                    </ul>
                    <ul
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            listStyle: "none",
                            gap: "40px",
                        }}
                    >
                        <li>
                            <i class="fa-brands fa-facebook-f"
                                style={{
                                    color: "#B0B8BC",
                                }}
                            ></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-linkedin-in"
                                style={{
                                    color: "#B0B8BC",
                                }}
                            ></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"
                                style={{
                                    color: "#B0B8BC",
                                }}
                            ></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-youtube"
                                style={{
                                    color: "#B0B8BC",
                                }}
                            ></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-instagram"
                                style={{
                                    color: "#B0B8BC",
                                }}
                            ></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}