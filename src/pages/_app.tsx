import '../styles/globals.css';
import { AppProps } from "next/app";
import MainLayout from '@/components/MainLayout';
const EcommrceApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
    )
}

export default EcommrceApp;