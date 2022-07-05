import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="75" y="0" rx="5" ry="5" width="150" height="200" />
        <rect x="0" y="215" rx="5" ry="5" width="300" height="22" />
        <rect x="-1" y="262" rx="5" ry="5" width="300" height="22" />
        <rect x="-1" y="290" rx="5" ry="5" width="300" height="22" />
        <rect x="-1" y="318" rx="5" ry="5" width="300" height="22" />
        <rect x="2" y="370" rx="5" ry="5" width="300" height="22" />
    </ContentLoader>
)

export default MyLoader

