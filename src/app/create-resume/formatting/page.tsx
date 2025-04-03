"use client"
import React, { useState, useEffect } from 'react'
import ImproveText from '@/components/formatting/improve-text/improveText'
import Template from '@/components/formatting/Template/template'
import axios from "axios";
import Swal from "sweetalert2";

export default function Formatting() {
    const [grammarCheck, setGrammarCheck] = useState(false);
    const [spellCheck, setSpellCheck] = useState(false);

    // start
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) return;

        if (selectedFile.size > 5 * 1024 * 1024) {
            Swal.fire("Error!", "File size exceeds 5 MB limit", "error");
            return;
        }

        setFile(selectedFile);
    };

    // Log file updates correctly
    useEffect(() => {
        if (file) console.log(file, "Updated file state");
    }, [file]);

    const uploadFile = async () => {
        if (!file) {
            Swal.fire("Error!", "No file selected", "error");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("providers", "extracta");
            formData.append("file", file);
            formData.append("fallback_providers", "extracta");

            // Log form data explicitly
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value);
            }

            const response = await axios.post(
                "https://api.edenai.run/v2/ocr/resume_parser",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EDENAI_API_KEY}`,
                    },
                }
            );

            console.log("Parsed Data:", response.data);
            Swal.fire("Success!", "Resume parsed successfully!", "success");
        } catch (error) {
            console.error("Upload Error:", error);
            Swal.fire("Error!", "Failed to parse resume", "error");
        } finally {
            setLoading(false);
        }

    };
    // end


    return (
        <div className='grid grid-cols-12 w-full gap-20 p-4'>
            <div className='col-span-4'>
                <ImproveText
                    grammarCheck={grammarCheck}
                    setGrammarCheck={setGrammarCheck}
                    spellCheck={spellCheck}
                    setSpellCheck={setSpellCheck}
                />
                <div className='px-4 py-4 border-2 rounded-lg bg-white'>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                        <input type="file" onChange={handleFileChange} accept=".pdf" />
                        <button
                            onClick={uploadFile}
                            disabled={!file || loading}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            {loading ? "Uploading..." : "Upload & Parse"}
                        </button>
                    </div>

                </div>


            </div>
            <div className='col-span-8'>
                <Template grammarCheck={grammarCheck} spellCheck={spellCheck} />
            </div>
        </div>
    )
}
