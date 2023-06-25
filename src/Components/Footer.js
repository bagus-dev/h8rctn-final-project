import React from "react";

const Footer = () => {
    const footerStyle = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60px',
        lineHeight: '60px',
        backgroundColor: '#f5f5f5'
    }

    return(
        <footer style={footerStyle}>
            <div className="container text-center">
                <span className="text-muted">&copy; 2023 - <a href="https://www.linkedin.com/in/bagus-p-rahardjo/" target="_blank">Bagus Puji Rahardjo</a></span>
            </div>
        </footer>
    )
}

export default Footer