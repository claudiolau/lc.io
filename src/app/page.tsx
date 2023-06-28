import { DefaultLayout } from "@components/layouts";
import { CenterLayout } from "@components/layouts/CenterLayout";
import { Navbar } from "@components/navbar/Navbar";

export default function Home() {
  return (
    <DefaultLayout>
      <CenterLayout>
        <Navbar />
      </CenterLayout>
    </DefaultLayout>
  );
}
