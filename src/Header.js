export default function Header(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            height: "60px",
            alignItems: "center",

        }}>
            <ul style={{
                color: "#37447E",
                display: "flex",
                listStyle: "none",
            }}>
                <li
                style={{
                    marginLeft: "40px",
                    fontSize: "14px",
                }}
                >Home</li>
                <li
                style={{
                    marginLeft: "40px",
                    fontSize: "14px",
                }}
                >About</li>
                <li
                style={{
                    marginLeft: "40px",
                    fontSize: "14px",
                }}
                >Contact</li>
            </ul>
            <p
            style={{
                fontWeight: "900",
                color: "#37447E",
                fontSize: "26px",
                width: "79px",
                height: "38px",
            }}>Landing</p>
            <button style={{
                border: "none",
                textAlign: "center",
                color: "white",
                fontSize: "12px",
                backgroundColor: "#111B47",
                marginRight: "40px",
                width: "160px",
                height: "26px",
            }}>Buy Now</button>
        </div>
    );
}