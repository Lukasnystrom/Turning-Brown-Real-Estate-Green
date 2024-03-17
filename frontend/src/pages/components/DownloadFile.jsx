import React from "react";

export default function DownloadFile(props) {
    const styles = {
        download: "text-blue-500 hover:text-blue-700"
    }
    return (
        <a href={props.file} download>
            <p className={styles.download}>Download {props.name}</p>
        </a>
    );
}