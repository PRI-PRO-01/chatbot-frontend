import React, { ReactElement } from 'react';
import SideBarLayout from '../../components/sideBarLayout';
// import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function projectSettingsPage() {
    return (
        <>
            <SideBarLayout>
                <h1 className='text-5xl font-bold'>PROJECT SETTINGS</h1>
            </SideBarLayout>
        </>
    )
}