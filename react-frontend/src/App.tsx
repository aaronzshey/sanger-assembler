import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "./components/ui/file-upload"

import { Center, Button, FileUploadFileAcceptDetails, VStack } from "@chakra-ui/react"
import { useState } from 'react'

export default function App() {
  const [selectedFiles, setSelectedFiles] = useState<FileUploadFileAcceptDetails>(null!);
  const [displayStatus, setDisplayStatus] = useState<string>("none");
  const [fileBlob, setFileBlob] = useState<Blob | undefined>(null!);

  const handleUpload = () => {
    const data = new FormData();

    for (const file of selectedFiles.files) {
      data.append('files', file, file.name);
    }

    fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: data
      // mode: 'no-cors'
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200 || response.status === 0) {
          setDisplayStatus("block");
          console.log("blob returned")
          return response.blob();

        }
      })
      .then((blob) => {
        console.log("blob set")
        setFileBlob(blob);
        console.log(fileBlob)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDownload = () => {
    if (fileBlob) {
      console.log("file blob exists");
      const fileURL = URL.createObjectURL(fileBlob);

      // create <a> element dynamically
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;

      // suggest a name for the downloaded file
      fileLink.download = 'merged_sequence.seq';

      // simulate click
      fileLink.click();
    }
  };

  return (
    <Center width="100vw" height="100vh">
      <VStack width="100vw" height="100vh">
        <FileUploadRoot
          maxW="xl"
          alignItems="stretch"
          maxFiles={10}
          style={{ border: "1px solid red" }}
          onFileAccept={(file) => { setSelectedFiles(file) }}
        >
          <FileUploadDropzone
            label="Drag and drop here to upload"
            description=".png, .jpg up to 5MB"

          />
          <FileUploadList />
          <Center>
            <Button
              //onClick={() => console.log(selectedFile)}
              onClick={handleUpload}
              className="rounded-lg border-black border-solid bg-purple-300 w-1/4">Upload</Button>
          </Center>
        </FileUploadRoot >
        <Button
          style={{ display: displayStatus }}
          onClick={handleDownload}
        >Download</Button>
      </VStack>
    </Center >

  )
}
