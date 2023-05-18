import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MathToy from './Toys';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  //   useEffect(() => {
  //     fetch('categories.json')
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data[0].categories));
  }, []);

  return (
    <div className="mt-10">
      {/* <Tabs>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Language Toys</Tab>
          <Tab>engineering toys</Tab>
        </TabList>

        <TabPanel>
          {categories.toys.map((toy) => (
            <MathToy toy={toy} />
          ))}
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
      <h2>Category</h2>
    </div>
  );
}
