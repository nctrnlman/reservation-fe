import React, { useState } from 'react';

const VoucherSystem = ({ applyVoucher }) => {
  const [voucherCode, setVoucherCode] = useState('');
  const [voucherApplied, setVoucherApplied] = useState(false);

  const handleApplyVoucher = () => {
    // Implement logic to apply the voucher code
    applyVoucher(voucherCode);
    setVoucherApplied(true);
  };

  return (
    <div>
      <label>Add Voucher:</label>
      <input
        type="text"
        placeholder="Enter voucher code"
        value={voucherCode}
        onChange={(e) => setVoucherCode(e.target.value)}
      />
      <button onClick={handleApplyVoucher} disabled={voucherApplied}>
        Apply Voucher
      </button>
    </div>
  );
};

export default VoucherSystem;
