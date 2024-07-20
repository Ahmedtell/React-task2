export default function Pricing(){
    return(
        <div
        style={{
            marginTop: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E7ECFF",
            height: "650px",
        }}
        >
        <div
        className="container"
        style={{
            width: "40%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
        }}
        >
            <p
            style={{
                color: "#091133",
                fontSize: "36px",
                fontWeight: "500",
                lineHeight: "48px",
            }}
            >A Price To Suit Everyone</p>
            <p
            style={{
                lineHeight: "26px",
                        fontWeight: "400",
                        color: "#6F7CB2",
            }}
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            <p
            style={{
                fontSize: "50px",
                color: "#222F65",
                fontWeight: "500",
                lineHeight: "66px",
            }}
            >$40</p>
            <p
            style={{
                color: "#37447E",
                fontWeight: "400",
                lineHeight: "26px",
            }}
            >UI Design Kit</p>
            <p
            style={{
                color: "#5D6970",
                fontSize: "14px",
                lineHeight: "24px",
            }}
            >See, One price. Simple.</p>
            <button
                style={{
                    border: "none",
                    textAlign: "center",
                    color: "white",
                    fontSize: "16px",
                    backgroundColor: "#111B47",
                    width: "190px",
                    height: "36px",
                }}
                >Purchase Now</button>
        </div>
        </div>
    );
}