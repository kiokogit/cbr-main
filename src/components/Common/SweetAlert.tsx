
import React from 'react';
import { Alert } from 'antd';

const AlertItem: React.FC = (props: any) => (
  <>
    
    <Alert message={props.message} type={props.type} showIcon closable />
    <br />
  </>
);

export default AlertItem;