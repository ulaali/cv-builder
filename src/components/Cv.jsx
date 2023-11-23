import React, { useMemo, useState } from "react";
import { Typography, Image, Col, Row, ColorPicker } from "antd";
import "./Cv.css";

const { Title } = Typography;
export default function Cv({
  user_Name,
  Intro,
  Skills,
  Cerifications,
  Education,
  Phone,
  Email,
  Experiences,
}) {
  const [Color, setColor] = useState("#1677ff");
  return (
    <>
      <ColorPicker
        value={Color}
        onChange={(Color) => {
          setColor(Color);
        }}
      />
      <div className="CV">
        <Row>
          <Col span={6}>
            {" "}
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              className="part"
              style={{ borderRadius: "10px" }}
            />{" "}
          </Col>
          <Col span={16} className="part">
            <Title
              level={5}
              style={{
                backgroundColor: useMemo(
                  () =>
                    typeof Color === "string" ? Color : Color.toHexString(),
                  [Color]
                ),
              }}
            >
              Introductions <br />
            </Title>
            <Typography.Text
              style={{
                color: useMemo(
                  () =>
                    typeof Color === "string" ? Color : Color.toHexString(),
                  [Color]
                ),
              }}
            >
              {Intro}
            </Typography.Text>
          </Col>
        </Row>
        <Row>
          <Col className="part" span={23}>
            {" "}
            <Typography.Title
              style={{
                backgroundColor: useMemo(
                  () =>
                    typeof Color === "string" ? Color : Color.toHexString(),
                  [Color]
                ),
              }}
            >
              {user_Name}
            </Typography.Title>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <hr />

            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                phone Number
              </Title>
              <Typography.Text>{Phone}</Typography.Text>
            </div>
            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                E-mail
              </Title>
              <Typography.Text>{Email}</Typography.Text>
            </div>
            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                LinkedIn
              </Title>
              <Typography.Text>LinkedIn</Typography.Text>
            </div>
            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                Skills And languages
              </Title>
              <Typography.Text>{Skills}</Typography.Text>
            </div>
          </Col>

          <Col span={12}>
            <hr />

            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                Education
              </Title>
              <Typography.Text>{Education}</Typography.Text>
            </div>
            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                Experniences
              </Title>
              <Typography.Text>{Experiences}</Typography.Text>
            </div>
            <div className="part">
              <Title
                level={5}
                style={{
                  color: useMemo(
                    () =>
                      typeof Color === "string" ? Color : Color.toHexString(),
                    [Color]
                  ),
                }}
              >
                Certifications
              </Title>
              <Typography.Text>{Cerifications}</Typography.Text>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
