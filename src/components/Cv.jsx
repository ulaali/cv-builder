import React, { useMemo } from "react";
import { Typography, Image, Col, Row } from "antd";
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
  Color,
  image,
  linkedin,
}) {
  return (
    <>
      <div className="CV">
        <Row>
          <Col span={6}>
            <Image
              width={200}
              src={image}
              className="part"
              style={{ borderRadius: "10px" }}
            />
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
              <Typography.Text>
                <a href={linkedin} target="_blank">
                  linkedin account
                </a>
              </Typography.Text>
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
              <Typography.Text>
                <ul>
                  {Skills.map((skill) => {
                    return <li>{skill}</li>;
                  })}
                </ul>
              </Typography.Text>
            </div>
          </Col>
          <Col span={18}>
            <Title
              level={2}
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
