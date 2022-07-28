import React from 'react'
import { TopBar } from '../components/TopBar'
import { ValorantCallToAction } from '../components/ValorantCallToAction'
import { ValorantFeedbacks } from '../components/ValorantFeedbacks'
import { ValorantIntro } from '../components/ValorantIntro'


export default function Home() {
	return (
        <>
            <TopBar />
            <ValorantIntro />
            <ValorantCallToAction />
            <ValorantFeedbacks />
        </>
	)
}