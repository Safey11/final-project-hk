import React from 'react';
import signatureImg from './assets/signatureImg.svg'; // Ensure this path is correct

const CertificateTemplate = React.forwardRef(({ student }, ref) => (
  <div
    ref={ref}
    className="certificate-container"
    style={{
      padding: '20px',
      border: '1px solid #000',
      width: '800px',
      height: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}
  >
    <div className="certificate-content" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className="certificate-title">Certificate of Completion</h1>
      <p className="certificate-text">This is to certify that</p>
      <h2 className="student-name">{student.name}</h2>
      <p className="certificate-text">has successfully completed the course</p>
      <h3 className="student-course">{student.course}</h3>
      <p className="certificate-text">Batch: {student.batch}</p>
      <p className="certificate-text">Status: {student.status}</p>
    </div>
    <div className="certificate-footer" style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '10px', width: '90%' }}>
      <div className="left-footer" style={{ textAlign: 'left', marginTop: '23px', marginLeft: '20px' }}>
        <p className="certificate-date">Date: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="right-footer" style={{ textAlign: 'right' }}>
        <p className="certificate-text">Signature</p>
        <img
          src={signatureImg}
          alt="Signature"
          style={{ width: '100px', marginBottom: '20px', height: 'auto' }}
        />
      </div>
    </div>
  </div>
));

export default CertificateTemplate;
