import Image from "next/image";
import styles from "./page.module.css";
import InfoGempa from "@/components/InfoGempa";
import getDataGempa from "@/functions/fetcher";
import { DataGempaTemplate, DataGempaType } from "@/types/dataGempa";

export default async function Home() {
  let dataGempa: DataGempaType = DataGempaTemplate;
  try {
    const fetcher = await getDataGempa();
    if (fetcher) {
      dataGempa = fetcher;
    }
  } catch (error) { }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <InfoGempa initialDataGempa={dataGempa} />
      </div>
    </main>
  );
}
