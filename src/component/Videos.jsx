import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Videos() {
    const videosArr = [
        'https://www.youtube.com/embed/S8TU3wNqyz8?si=NkAJGaWO64ekIn4u',
        'https://www.youtube.com/embed/x2jKNmbYdbI?si=92p_ynTSGoeOf5yT',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    ];
    const tit = [
        'Jallianwala Bagh Massacre | Trailer | The Shadow Speaks',
        'From Aryabhata to Chandrayaan-3 | History of ISRO | The Shadow Speaks',
    ]

    const [titChange, setTitChange] = useState(tit[0]);
    const [videoSrc, setVideoSrc] = useState(videosArr[0]);

    return (
        <Stack direction={['column', 'row']} h={'125vh'}>
            <VStack w={'full'}>
                {/* <video
                    controls
                    src={videoSrc}
                    controlsList='nodownload' style={{
                        width: '100%',
                    }}></video> */}
                <div class="ratio ratio-16x9" style={{
                    marginBottom: ['0','20px']
                }}>
                    <iframe src={videoSrc} title="YouTube video" allowFullScreen style={{
                        margin: ['0','20px'],
                        borderRadius: '10px',
                    }}></iframe>
                </div>
                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} style={{
                    marginLeft: ['0', '20px'],
                }}>
                    <Heading>{titChange}</Heading>
                    <Text>This is a sample video</Text>
                </VStack>

            </VStack>
            <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
                <Heading style={{textAlign: 'center'}}>Our Projects</Heading>
                {videosArr.map((item, index) => (<Button variant={'ghost'} colorScheme='purple' onClick={() => {setVideoSrc(item);setTitChange(tit[index])}}> Project {index + 1}</Button>))}

            </VStack>
        </Stack>
    )
}

export default Videos