import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";

export default function BlogPostsOnePage() {
  return (
    <>
      <Helmet>
        <title>Blog Styling</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full px-14 py-[122px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[53px] mx-[7px] max-w-[1140px]">
          <div className="flex flex-col items-center justify-start w-[66%] gap-3">
            <Heading size="md" as="h1" className="text-center">
              Our Latest Posts
            </Heading>
            <Text size="md" as="p" className="text-center !font-light !leading-[26px]">
              Adwords Keyword research for beginners when you embark on your first PPC journey, you need to keep a small
              number of keywords at first.
            </Text>
          </div>
          <div className="flex flex-row w-full gap-[30px]">
            <div className="flex flex-col items-center justify-start w-[32%] pb-6 gap-[17px] bg-white-A700 shadow-xs rounded">
              <Img
                src="images/img_bitmap.png"
                alt="by_john_doe_one"
                className="w-full rounded-tr rounded-tl object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[87%] gap-[15px]">
                <div className="flex flex-row justify-start items-center gap-2">
                  <Text as="p">by John Doe</Text>
                  <Img src="images/img_.svg" alt="by_john_doe" className="h-[4px] w-[4px]" />
                  <Text as="p">15 March, 2022</Text>
                </div>
                <Heading as="h2">How to create a UX Writing portfolio as a beginner</Heading>
                <div className="flex flex-row justify-start">
                  <Button className="w-full uppercase font-medium">UX WRITING</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[32%] pb-6 gap-[17px] bg-white-A700 shadow-xs rounded">
              <Img
                src="images/img_bitmap_236x360.png"
                alt="bitmap_one"
                className="w-full rounded-tr rounded-tl object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[87%] gap-[15px]">
                <div className="flex flex-row justify-start items-center">
                  <Text as="p">by John Doe</Text>
                  <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px] ml-0.5" />
                  <Text as="p" className="ml-2">
                    15 March, 2022
                  </Text>
                </div>
                <Heading as="h3">
                  How Snapchat and Netflix Break UX Design Principles
                  <br />
                </Heading>
                <div className="flex flex-row justify-start w-[64%] gap-3">
                  <div className="flex flex-row justify-start w-[47%]">
                    <Button className="w-full uppercase font-medium">UX DESIGN</Button>
                  </div>
                  <div className="flex flex-row justify-start w-[47%]">
                    <Button color="red_700_19" className="w-full uppercase font-medium">
                      UI DESIGN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[32%] pb-6 gap-[17px] bg-white-A700 shadow-xs rounded">
              <Img
                src="images/img_bitmap_1.png"
                alt="bitmap_one"
                className="w-full rounded-tr rounded-tl object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[87%] gap-[15px]">
                <div className="flex flex-row justify-start items-center">
                  <Text as="p">by John Doe</Text>
                  <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px] ml-0.5" />
                  <Text as="p" className="ml-2">
                    15 March, 2022
                  </Text>
                </div>
                <Heading as="h4">How to Design Your Site to Make it Super-fast</Heading>
                <div className="flex flex-row justify-start">
                  <Button className="w-full uppercase font-medium">WEB DESIGN</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[13%] gap-1">
            <a href="/blogpostsfour">
              <Heading as="h2" className="!text-blue-A700 !font-semibold">
                READ MORE
              </Heading>
            </a>
            <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </>
  );
}
