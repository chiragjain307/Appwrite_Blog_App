import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";

export default function BlogPostsFourPage() {
  return (
    <>
      <Helmet>
        <title>Blog Styling</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full px-14 py-[130px] bg-gray-50">
        <div className="flex flex-row justify-between items-center w-full mt-10 mb-9 max-w-[1140px]">
          <div className="flex flex-col items-start justify-start w-[29%] gap-8">
            <div className="flex flex-col items-start justify-start w-[93%] gap-3">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <Text size="md" as="p" className="uppercase">
                  Blog posts
                </Text>
                <Img src="images/img_line_blue_gray_600.svg" alt="line_one" className="h-px" />
              </div>
              <Heading size="md" as="h1" className="!leading-[50px]">
                Read Our Latest Posts
              </Heading>
              <Text size="md" as="p" className="ml-0.5 !leading-[27px]">
                Adwords Keyword research for beginners when you embark on your first PPC journey.
              </Text>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <div className="flex flex-row justify-center items-start w-full">
                  <Heading size="xs" as="h2" className="w-[92%]">
                    Writing A Good Headline For Your Advertisement
                  </Heading>
                  <Img src="images/img_arrow_right.svg" alt="image" className="h-[24px] w-[24px] ml-1" />
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="flex flex-row justify-center items-start w-full">
                  <Heading size="xs" as="h3" className="w-[92%]">
                    Where To Look For Cheap Printing Services
                  </Heading>
                  <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] ml-1" />
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="flex flex-row justify-center items-start w-full">
                  <Heading size="xs" as="h4" className="w-[92%]">
                    Using Banner Stands To Increase Trade Show Traffic
                  </Heading>
                  <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] ml-1" />
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[66%] gap-[30px]">
            <div className="flex flex-col items-center justify-start w-[48%] pb-6 gap-[17px] bg-white-A700 shadow-xs rounded">
              <Img
                src="images/img_bitmap_312x360.png"
                alt="by_john_doe_one"
                className="w-full rounded-tr rounded-tl object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[87%]">
                <div className="flex flex-row justify-start items-center gap-2">
                  <Text as="p">by John Doe</Text>
                  <Img src="images/img_.svg" alt="by_john_doe" className="h-[4px] w-[4px]" />
                  <Text as="p">15 March, 2022</Text>
                </div>
                <Heading as="h2" className="mt-[15px]">
                  How to create a UX Writing portfolio as a beginner
                </Heading>
                <Text size="s" as="p" className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s.
                </Text>
                <div className="flex flex-row justify-start mt-4">
                  <Button className="w-full uppercase font-medium">UX WRITING</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[48%] pb-6 gap-[17px] bg-white-A700 shadow-xs rounded">
              <Img
                src="images/img_bitmap_236x360.png"
                alt="bitmap_one"
                className="w-full rounded-tr rounded-tl object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[87%]">
                <div className="flex flex-row justify-start items-center gap-2">
                  <Text as="p">by John Doe</Text>
                  <Img src="images/img_.svg" alt="image" className="h-[4px] w-[4px]" />
                  <Text as="p">15 March, 2022</Text>
                </div>
                <Heading as="h3" className="mt-[15px]">
                  How Snapchat and Netflix Break UX Design Principles
                  <br />
                </Heading>
                <Text size="s" as="p" className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s.
                </Text>
                <div className="flex flex-row justify-start w-[64%] mt-4 gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
