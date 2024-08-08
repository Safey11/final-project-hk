import signatureImg from './path/to/your/signature.png';

const CertificateTemplate = React.forwardRef(({ student }, ref) => (
  <div ref={ref} /* ... your styles and structure ... */>
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
