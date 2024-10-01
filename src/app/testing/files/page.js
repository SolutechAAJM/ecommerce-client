"use client";

import { useState } from "react";
import { getFile } from "@/app/services/file/index";

export default function Page() {

    const [file, setFile] = useState(null);

    const viewFile = async () => {
        const urlFile = await getFile(file);
        window.open(urlFile);
    };

    return (
        <>
            <input onChange={(e) => setFile(e.target.value)} placeholder="Nombre del archivo" />
            <button onClick={viewFile}>Ver archivo</button>
        </>
    );
}
