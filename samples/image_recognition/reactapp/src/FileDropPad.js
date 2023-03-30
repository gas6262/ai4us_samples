import React, { useState, useEffect } from 'react'
import { FileUploader } from "react-drag-drop-files";

export const FileDropPad = ({ startFileAdd, maxSize, label }) => {

    return (
        <FileUploader
            label={"Upload or drop an image here"}
            maxSize={maxSize ?? 20}
            onSelect={(file) => { startFileAdd(file); }}
            onDrop={(file) => { startFileAdd(file); }}
            name="file"
            multiple={true} />
    );
}
