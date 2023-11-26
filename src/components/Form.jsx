import * as React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Input,
  Row,
  Col,
  Button,
  Space,
  Form,
  ColorPicker,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import Cv from "./Cv";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const { TextArea } = Input;
const validationSchema = Yup.object().shape({
  user_Name: Yup.string()
    .required("this feild is required")
    .min(2, "too short")
    .max(20, "too long"),
  Email: Yup.string().email().required("this feild is required"),
  Phone: Yup.number().required("this feild is required"),
  Experiences: Yup.string()
    .required("this feild is required")
    .min(20, "write more")
    .max(100, "too long"),
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
    .min(20, "")
    .max(300, "too long"),
  linkedin: Yup.string()
    .required("this feild is required")
    .min(20, "")
    .max(100, "too long"),
});

export default function Formm() {
  const [Skills, setSkills] = useState([]);
  const [Skill, setSkill] = useState("");
  const [Color, setColor] = useState("#1677ff");
  const [image, setImage] = useState();

  const getimage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const refe = useRef();
  const handleDownload = useReactToPrint({
    content: () => refe.current,
    documentTitle: "my-cv",
  });
  const handleAdd = () => {
    Skill === ""
      ? alert("please enter a skill first")
      : setSkills([...Skills, Skill]);
    setSkill("");
  };
  return (
    <div>
      <Formik
        initialValues={{
          user_Name: "",
          Experiences: "",
          Cerifications: "",
          Email: "",
          Phone: "",
          Intro: "",
          Education: "",
          Skills: "",
          linkedin: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, values, handleChange }) => (
          <>
            <Row>
              <Col span={9}>
                <Form style={{ marginLeft: "50px", marginTop: "180px" }}>
                  <Title level={1}> Please fill out this form</Title>
                  <Space direction="vertical">
                    <Input
                      placeholder="Name..."
                      allowClear
                      style={{ width: "150%" }}
                      name="user_Name"
                      margin="dense"
                      id="user_Name"
                      type="text"
                      value={values.user_Name}
                      onChange={handleChange}
                      required
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
                      required
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
                      required
                    ></Input>
                    <Input
                      placeholder="your linkedin account..."
                      allowClear
                      style={{ width: "150%" }}
                      name="linkedin"
                      margin="dense"
                      id="linkedin"
                      type="text"
                      value={values.linkedin}
                      onChange={handleChange}
                      required
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
                      required
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
                      required
                    ></Input>
                    <Input
                      placeholder="Skills..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Skills"
                      margin="dense"
                      id="Skills"
                      type="text"
                      value={Skill}
                      onChange={(e) => setSkill(e.target.value)}
                    ></Input>
                    <Button onClick={handleAdd} type="primary">
                      ADD
                    </Button>
                    <Input
                      placeholder="Certifications..."
                      allowClear
                      style={{ width: "150%" }}
                      name="Cerifications"
                      margin="dense"
                      id="Cerifications"
                      type="text"
                      value={values.Cerifications}
                      onChange={handleChange}
                      required
                    ></Input>

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
                      onError={() => errors.Intro}
                      required
                    ></TextArea>
                    <Input type="file" onChange={getimage} required></Input>
                    <Row>
                      <Typography.Text>choose a color : </Typography.Text>
                      <ColorPicker
                        value={Color}
                        onChange={(Color) => {
                          setColor(Color);
                        }}
                      />
                    </Row>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={handleDownload}
                    >
                      Download Your CV here!
                    </Button>
                  </Space>
                </Form>
              </Col>
              <Col span={14}>
                <Title>CV Preview</Title>
                <div ref={refe}>
                  <Cv
                    user_Name={values.user_Name}
                    Intro={values.Intro}
                    Skills={Skills}
                    Cerifications={values.Cerifications}
                    Education={values.Education}
                    Phone={values.Phone}
                    Email={values.Email}
                    Experiences={values.Experiences}
                    Color={Color}
                    image={image}
                    linkedin={values.linkedin}
                  />
                </div>
              </Col>
            </Row>
          </>
        )}
      </Formik>
    </div>
  );
}
