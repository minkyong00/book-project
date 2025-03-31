import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test")
  }

  //getLayout 있을 경우 사용하고 없을 경우에는 page받아서 그대로 page 출력
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
