import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { useState } from 'react'
import FormPersonal from './Forms/FormPersonal';
import FormIntro from './Forms/FormIntro';
import FormOther from './Forms/FormOther';

const ProfileData = () => {

  const [value, setValue] = useState('1')

  const handleChange = (e, val) => {
    setValue(val)
  }

  return (
    <div>
      <TabContext value={value} className="border-dotted border-veg-light">
        <Box sx={{ borderBottom: 1, color: 'primairy.main'}}>
          <TabList aria-label='Tabs' onChange={handleChange} variant="scrollable" scrollButtons='auto'>
            <Tab label='Személyes Adatok' value='1' />
            <Tab label='Bemutatkozás' value='2' />
            <Tab label='Egyéb' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <FormPersonal />
        </TabPanel>
        <TabPanel value='2'>
          <FormIntro />
        </TabPanel>
        <TabPanel value='3'>
          <FormOther />
        </TabPanel>
      </TabContext>
      <div className='flex justify-center mt-12'>
        <button
          type="submit"
          // disabled={!email || !password}
          className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-veg-dark text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Jóváhagyom
        </button>
      </div>
    </div>
    
    
  )
}

export default ProfileData;