import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import UserLikes from './userLikes'
import UserPosts from './userPosts'
const TabComponent = ({user}) => {


    console.log('TabComponent--->👁👁👁👁',user);
    return (
        <div>

<Tabs>
  <TabList>
    <Tab>Likes</Tab>
    <Tab>Posts</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
     
<div>
<UserLikes user={user} />
</div>

    </TabPanel>



    <TabPanel>
      
      <div>
<UserPosts user={user} />
      </div>
    </TabPanel>
  
  </TabPanels>
</Tabs>



            
        </div>
    );
}

export default TabComponent;
