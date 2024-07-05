import Image from "next/image";
import styles from "./page.module.css";
import InfoGempa from "@/components/InfoGempa";
import getDataGempa from "@/functions/fetcher";
import { DataGempaTemplate, DataGempaType } from "@/types/dataGempa";

export default async function Home() {
  let errTxt: string = ""
  let dataGempa: DataGempaType = DataGempaTemplate;
  try {
    const fetcher = await getDataGempa();
    if (fetcher) {
      dataGempa = fetcher;
    }
  } catch (error:any) { errTxt = error?.message || "Terjadi kesalahan" }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        { errTxt ? <span>{errTxt}</span> : <InfoGempa initialDataGempa={dataGempa} />}
      </div>
    </main>
  );
}
