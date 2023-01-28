import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';

const ErrPage = () => {
    const navigate=useNavigate()
  return (
    <div>
    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary" onClick={()=>navigate("/")}>Back Home</Button>}
  />
    </div>
  )
}

export default ErrPage