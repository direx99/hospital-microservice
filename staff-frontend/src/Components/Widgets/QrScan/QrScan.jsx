import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './qrscan.css'

export default function  QrScan () {
  const [data, setData] = useState('No result');

  return (
    <div >
      <QrReader 
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
    </div>
  );
};
