import * as React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Input, Row, Col, Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import Cv from "./Cv";

const { TextArea } = Input;
const validationSchema = Yup.object().shape({
  user_Name: Yup.string()
    .required("this feild is required")
    .min(2, "too short")
    .max(20, "too long"),
  Email: Yup.string()
    .required("this feild is required")
    .min(6, "too short")
    .max(20, "too long"),
  Phone: Yup.number().required("this feild is required"),
  Experiences: Yup.string()
    .required("this feild is required")
    .min(20, "")
    .max(200, "too long"),
  Education: Yup.string()
    .required("this feild is required")
    .min(20, "")
    .max(200, "too long"),
  Skills: Yup.string()
    .required("this feild is required")
    .min(5, "")
    .max(100, "too long"),
  Cerifications: Yup.string()
    .required("this feild is required")
    .min(10, "")
    .max(200, "too long"),
  Intro: Yup.string()
    .required("this feild is required")
    .min(50, "")
    .max(300, "too long"),
});

export default function FormDialog() {
  return (
    <div>
      <Formik
        initialValues={{
          Name: "",
          Password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, values, handleChange, touched }) => (
          <>
            <Row>
              <Col span={9}>
                <Form style={{marginLeft:'50px',marginTop:'180px'}}>
                  <Title level={1}> Please fill out this form</Title>
                  <Space direction="vertical">
                    <Input placeholder="Name..." allowClear errorActiveShadow style={{width:'150%'}}></Input>

                    <Input placeholder="Email..." allowClear style={{width:'150%'}}></Input>

                    <Input placeholder="Phone Number..." allowClear style={{width:'150%'}}></Input>

                    <Input placeholder="Education..." allowClear style={{width:'150%'}}></Input>

                    <Input placeholder="Experiences..." allowClear style={{width:'150%'}}></Input>

                    <TextArea placeholder="Skills..." allowClear style={{width:'150%'}}></TextArea>

                    <TextArea
                      placeholder="About Yourself..."
                      allowClear
                      style={{width:'150%'}}
                    ></TextArea><b/>
                    <Button type="primary">Download CV here!</Button>
                  </Space>
                </Form>
              </Col>
              <Col span={14}>
                <Title>CV Preview</Title>
                <Cv />
              </Col>
            </Row>
          </>
        )}
      </Formik>
    </div>
  );
}
