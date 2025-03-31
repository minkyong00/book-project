import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test")
  }

  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
