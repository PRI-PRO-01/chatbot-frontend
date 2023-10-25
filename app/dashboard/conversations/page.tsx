import React, { ReactElement } from 'react';
import SideBarLayout from '../../components/sideBarLayout';
import Chat from '@/app/components/chat';

export default function conversationsPage() {
    return (
        <>
            <SideBarLayout>
                <h1 className='text-5xl font-bold'>CHAT CONVERSATION</h1>
                <Chat/>
            </SideBarLayout>
        </>
    )
}