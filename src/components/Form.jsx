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
                <Form style={{ marginLeft: "50px", marginTop: "180px" }}>
                  <Title level={1}> Please fill out this form</Title>
                  <Space direction="vertical">
                    <Input
                      placeholder="Name..."
                      allowClear
                      status={'error' &&errors.user_Name}
                      style={{ width: "150%" }}
                      name="user_Name"
                      margin="dense"
                      id="user_Name"
                      type="text"
                      value={values.user_Name}
                      onChange={handleChange}
                      error={errors.user_Name && touched.user_Name}
                    ></Input>

                    <Input
                      placeholder="Email..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Email"
                      margin="dense"
                      id="Email"
                      type="email"
                      value={values.Email}
                      onChange={handleChange}
                      error={errors.Email && touched.Email}
                      helperText={errors.Email}
                    ></Input>

                    <Input
                      placeholder="Phone Number..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Phone"
                      margin="dense"
                      id="Phone"
                      type="number"
                      value={values.Phone}
                      onChange={handleChange}
                      error={errors.Phone && touched.Phone}
                      helperText={errors.Phone}
                    ></Input>

                    <Input
                      placeholder="Education..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Education"
                      margin="dense"
                      id="Education"
                      type="text"
                      value={values.Education}
                      onChange={handleChange}
                      error={errors.Education && touched.Education}
                      helperText={errors.Education}
                    ></Input>

                    <Input
                      placeholder="Experiences..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Experiences"
                      margin="dense"
                      id="Experiences"
                      type="text"
                      value={values.Experiences}
                      onChange={handleChange}
                      error={errors.Experiences && touched.Experiences}
                      helperText={errors.Experiences}
                    ></Input>

                    <TextArea
                      placeholder="Skills..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Skills"
                      margin="dense"
                      id="Skills"
                      type="text"
                      value={values.Skills}
                      onChange={handleChange}
                      error={errors.Skills && touched.Skills}
                      helperText={errors.Skills}
                    ></TextArea>

                    <TextArea
                      placeholder="About Yourself..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Intro"
                      margin="dense"
                      id="Intro"
                      type="text"
                      value={values.Intro}
                      onChange={handleChange}
                      error={errors.Intro && touched.Intro}
                      helperText={errors.Intro}
                    ></TextArea>
                    <b />
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
