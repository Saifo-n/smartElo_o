import Image  from "next/image";
import { createMetadataComponents } from "next/dist/lib/metadata/metadata";
import { loadComponents } from "next/dist/server/load-components";
import Header from "@/components/header";

export default function Home(){
    return(
        <main>
            <h1> Hello </h1>
        </main>
    )
}
