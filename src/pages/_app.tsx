import '../styles/globals.css';
import { AppProps } from "next/app";

const EcommrceApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default EcommrceApp;