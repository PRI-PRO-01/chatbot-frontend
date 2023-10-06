import React, { ReactElement } from 'react';
import SideBarLayout from '../../components/sideBarLayout';
// import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function evaluationsPage() {
    return (
        <>
            <SideBarLayout>
                <h1 className='text-5xl font-bold'>EVALUATIONS</h1>
            </SideBarLayout>
        </>
    )
}