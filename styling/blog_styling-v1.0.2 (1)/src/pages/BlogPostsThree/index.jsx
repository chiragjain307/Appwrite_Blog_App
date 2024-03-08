import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";

export default function BlogPostsThreePage() {
  return (
    <>
      <Helmet>
        <title>Blog Styling</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full px-14 py-[95px] bg-gray-50">
        <div className="flex flex-row justify-center w-full mx-[35px] max-w-[1140px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-col items-center justify-start w-[32%] mb-[223px] bg-white-A700 shadow-xs cursor-pointer rounded hover:shadow-xs">
                <div className="flex flex-col items-end justify-start w-full gap-4">
                  <Img
                    src="images/img_bitmap.png"
                    alt="bitmap_one"
                    className="w-full rounded-tr rounded-tl object-cover"
                  />
                  <div className="flex flex-row justify-start items-start w-[94%] gap-[18px]">
                    <div className="flex flex-col items-start justify-start w-[78%] mb-[19px] gap-[18px]">
                      <div className="flex flex-row justify-start">
                        <Button className="w-full uppercase font-medium">UX WRITING</Button>
                      </div>
                      <Heading as="h1">How to create a UX Writing portfolio as a beginner</Heading>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Text as="p">by John Doe</Text>
                        <Img src="images/img_.svg" alt="by_john_doe_one" className="h-[4px] w-[4px]" />
                        <Text as="p">15 March, 2022</Text>
                      </div>
                    </div>
                    <Button color="blue_A700" size="md" shape="square" className="w-[56px] mt-[100px]">
                      <Img src="images/img_arrow_right_solid.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] my-[111px] bg-white-A700 shadow-xs cursor-pointer rounded hover:shadow-xs">
                <div className="flex flex-col items-end justify-start w-full gap-4">
                  <Img
                    src="images/img_bitmap_236x360.png"
                    alt="bitmap_one"
                    className="w-full rounded-tr rounded-tl object-cover"
                  />
                  <div className="flex flex-row justify-start items-start w-[94%] gap-4">
                    <div className="flex flex-col items-start justify-start w-[79%] mb-[19px] gap-[18px]">
                      <div className="flex flex-row justify-start w-[75%] gap-3">
                        <div className="flex flex-row justify-start w-[47%]">
                          <Button className="w-full uppercase font-medium">UX DESIGN</Button>
                        </div>
                        <div className="flex flex-row justify-start w-[47%]">
                          <Button color="red_700_19" className="w-full uppercase font-medium">
                            UI DESIGN
                          </Button>
                        </div>
                      </div>
                      <Heading as="h2">
                        How Snapchat and Netflix Break UX Design Principles
                        <br />
                      </Heading>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <Text as="p">by John Doe</Text>
                        <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px]" />
                        <Text as="p">15 March, 2022</Text>
                      </div>
                    </div>
                    <Button color="blue_A700" size="md" shape="square" className="w-[56px] mt-[100px]">
                      <Img src="images/img_arrow_right_solid.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] mt-[9px] gap-[193px] cursor-pointer hover:shadow-xs">
                <div className="flex flex-row justify-start items-start gap-3.5">
                  <Img src="images/img_line.svg" alt="line_one" className="h-px mt-2" />
                  <Heading size="xs" as="h3">
                    Read our latest blog posts
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full bg-white-A700 shadow-xs rounded">
                  <div className="flex flex-col items-end justify-start w-full gap-4">
                    <Img
                      src="images/img_bitmap_1.png"
                      alt="bitmap_one"
                      className="w-full rounded-tr rounded-tl object-cover"
                    />
                    <div className="flex flex-row justify-start items-start w-[94%] gap-[18px]">
                      <div className="flex flex-col items-start justify-start w-[78%] mb-[19px] gap-[18px]">
                        <div className="flex flex-row justify-start">
                          <Button className="w-full uppercase font-medium">WEB DESIGN</Button>
                        </div>
                        <Heading as="h4">How to Design Your Site to Make it Super-fast</Heading>
                        <div className="flex flex-row justify-start items-center gap-2">
                          <Text as="p">by John Doe</Text>
                          <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px]" />
                          <Text as="p">15 March, 2022</Text>
                        </div>
                      </div>
                      <Button color="blue_A700" size="md" shape="square" className="w-[56px] mt-[100px]">
                        <Img src="images/img_arrow_right_solid.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
