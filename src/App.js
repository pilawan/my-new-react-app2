import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Select, Radio, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPrefix,
  setFirstName,
  setLastName,
  setBirthdate,
  setNationality,
  setIdNumber,
  setGender,
  setPhoneNumber,
} from './formSlice';

const { Option } = Select;

const MyForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [initialValuesSet, setInitialValuesSet] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      dispatch(setPrefix(storedFormData.prefix));
      dispatch(setFirstName(storedFormData.firstName));
      dispatch(setLastName(storedFormData.lastName));
      dispatch(setBirthdate(storedFormData.birthdate));
      dispatch(setNationality(storedFormData.nationality));
      dispatch(setIdNumber(storedFormData.idNumber));
      dispatch(setGender(storedFormData.gender));
      dispatch(setPhoneNumber(storedFormData.phoneNumber));
      setInitialValuesSet(true);
    }
  }, [dispatch]);

  const onFinish = (values) => {
    dispatch(setPrefix(values.prefix));
    dispatch(setFirstName(values.firstName));
    dispatch(setLastName(values.lastName));
    dispatch(setBirthdate(values.birthdate));
    dispatch(setNationality(values.nationality));
    dispatch(setIdNumber(values.idNumber));
    dispatch(setGender(values.gender));
    dispatch(setPhoneNumber(values.phoneNumber));

    localStorage.setItem('formData', JSON.stringify(values));
    console.log('Form values:', values);
  };

  return (
    <Form onFinish={onFinish} initialValues={initialValuesSet ? formData : undefined}>
      <Form.Item name="prefix" label="คำนำหน้า">
        <Select placeholder="เลือกคำนำหน้า">
          <Option value="นาย">นาย</Option>
          <Option value="นาง">นาง</Option>
          <Option value="นางสาว">นางสาว</Option>
        </Select>
      </Form.Item>
      <Form.Item name="firstName" label="ชื่อจริง">
<Input />
</Form.Item>
<Form.Item name="lastName" label="นามสกุล">
<Input />
</Form.Item>
<Form.Item name="birthdate" label="วันเกิด">
<DatePicker />
</Form.Item>
<Form.Item name="nationality" label="สัญชาติ">
<Input />
</Form.Item>
<Form.Item name="idNumber" label="เลขบัตรประชาชน">
<Input />
</Form.Item>
<Form.Item name="gender" label="เพศ">
<Radio.Group>
  <Radio value="male">ชาย</Radio>
  <Radio value="female">หญิง</Radio>
  <Radio value="other">อื่นๆ</Radio>
</Radio.Group>
</Form.Item>
<Form.Item name="phoneNumber" label="หมายเลขโทรศัพท์">
<Input />
</Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          ยืนยัน
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;

