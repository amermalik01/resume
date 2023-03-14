"use client";
import React, { Fragment, useState } from "react";

// import { useState } from 'react';
import { Tab } from "@headlessui/react";

const Skills = ({ data }) => {
//   const [activeTab, setActiveTab] = useState("soft");
  const [activeTab, setActiveTab] = useState(0);

  /* const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTabsAlignment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";
 */
  /* const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill">
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  ); */

  function classNames(...classes) {

	console.log('classes == ',classes);
    return classes.filter(Boolean).join(" ");
  }

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      {/* {tabs}
      {content} */}

      <Tab.Group className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab.List>
          {Object.keys(categories).map((category) => (
            <Tab
              
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

    
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
      </Tab.Group>
    </div>
  );
};


export default Skills;
