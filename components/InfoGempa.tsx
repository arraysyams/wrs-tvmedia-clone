"use client";
import { useEffect, useState } from "react";
import { DataGempaTemplate, DataGempaType } from "@/types/dataGempa";
import getDataGempa from "@/functions/fetcher";

export default function InfoGempa({ initialDataGempa }: { initialDataGempa: DataGempaType }) {
  // Variabel initialData digunakan untuk berpindah antara
  // data yang dikirim dari server (page.tsx) dengan data yang di-fetch
  // dari client
  const [initialDataUsage, setInitialDataUsage] = useState(true);
  const [clientData, setClientData] = useState(DataGempaTemplate as DataGempaType);

  useEffect(() => {
    // Pindah data yang dikirim dari server ke clientData
    if (initialDataUsage) {
      setClientData(initialDataGempa);
      setInitialDataUsage(false);
    }
    // Timer untuk fetch info gempa secara berkala
    const timer = setInterval(() => {
      getDataGempa().then((dataGempa) => {
        if (dataGempa) {
          setClientData(dataGempa);
        }
      });
    }, 5000);
    // Cleanup function (hapus interval)
    return () => {
      clearInterval(timer);
    };
  }, [initialDataUsage, initialDataGempa]);
  return (
    <div>
      <span>{initialDataUsage ? initialDataGempa.description : clientData.description}</span>
    </div>
  );
}
