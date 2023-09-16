"use client";
import Image from "next/image";
import styles from "./page.module.css";
import AppTable from "@/components/app.table";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <ul>
        <li>
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
      </ul>
      <AppTable
        blogs={data?.sort((a: IBlog, b: IBlog) => b.id - a.id)}
      ></AppTable>
    </>
  );
}
