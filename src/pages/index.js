import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return <h1>인덱스</h1>;
}

Home.getLayout = (page) => {
  return <SearchableLayout>{page}</SearchableLayout>
}