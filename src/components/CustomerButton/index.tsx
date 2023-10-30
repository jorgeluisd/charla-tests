// UNIT
import React from 'react';

interface Props {
  label: string
  onClick: () => void
}

const CustomerButton: React.FC<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CustomerButton
