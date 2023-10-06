import React, { ReactElement } from 'react';
import SideBarLayout from '../components/sideBarLayout';
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function dashboardPage() {
    return (
        <>
            <SideBarLayout>
                <h1 className='text-5xl font-bold'>WELCOME TO ADA,</h1>
                <h2 className='text-xl'>Take a look at all your projects and manage your settings.</h2>
                <div className='flex justify-between my-10'>
                    <span className='text-3xl font-semibold'>PROJECTS</span>
                    <Link href={'/signUp'} className={`${styles.newProjectButton}`}>Create another project</Link>
                </div>
                <div className={`${styles.project}`}>
                    <p>Better-Blue-Tick</p>
                    <span>&#8285;</span>
                </div>
            </SideBarLayout>
        </>
    )
}