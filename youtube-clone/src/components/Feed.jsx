import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, Sidebar } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('홈');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2023 yellowredcandy3
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

// import { useEffect, useState } from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import { Sidebar, Videos } from './';
// import { fetchFromAPI } from '../utils/fetchFromAPI';

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('홈');

//   const [videos, setVideos] = useState([]);
//   useEffect(() => {
//     setVideos(null);

//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
//       setVideos(data.items)
//     );
//   }, [selectedCategory]);

//   return (
//     <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
//       <Box
//         sx={{
//           height: { sx: 'auto', md: '92vh' },
//           borderRight: '1px solid #3d3d3d',
//           px: { sx: 0, md: 2 },
//         }}
//       >
//         <Sidebar //사이드바에서 프롭스로전달?
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />

//         <Typography
//           className="copyright"
//           variant="body2"
//           sx={{ mt: 1.5, color: '#fff' }}
//         >
//           Copyright 2023 yellowredcandy3
//         </Typography>
//       </Box>

//       <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={2}
//           sx={{ color: 'white' }}
//         >
//           {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
//         </Typography>
//         <Videos videos={[videos]} />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;
