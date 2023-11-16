'use client'
import './sideBarLayout.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Image from 'next/image'
import Link from 'next/link'

const linksMenu = [{
    label: 'Dashboard',
    route: '/dashboard'
}, {
    label: 'Chat Conversation',
    route: '/dashboard/conversations'
}, {
    label: 'Manage Data Sources',
    route: '/dashboard/dataSources'
}, {
    label: 'Teach Model',
    route: '/dashboard/teachModel'
}, {
    label: 'Evaluations',
    route: '/dashboard/evaluations'
}, {
    label: 'Usage',
    route: '/dashboard/usage'
}, {
    label: 'Project Settings',
    route: '/dashboard/projectSettings'
}]

const linksNav = [{
    label: 'Upgrade',
    route: '#'
}, {
    label: 'docs',
    route: '#'
}, {
    label: 'Embed',
    route: '#'
}, {
    label: 'Share Demo',
    route: '#'
}, {
    label: 'Help',
    route: '#'
}, {
    label: 'Account',
    route: '#'
}]

export default function sideBarLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* <div className='background'>
                    <div className='img'>
                        <img src="/img/black-background.jpg" alt="" />
                    </div>
                    <div className='img_overlay'></div>
                </div> */}
                <ProgressBar
                    height="4px"
                    color="#777ff3"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
                <div className='bodyPage'>
                    <aside className='sideBarMenu'>
                        <ul className='dashHeader'>
                            <a href="./">
                                <Image src={"/img/ada_logoMini.png"} alt='ADA' width={70} height={70} className='rounded-xl' />
                            </a>
                        </ul>
                        {linksMenu.map(({ label, route }) => (
                            <ul>
                                <li key={route}>
                                    <Link href={route}>{label}</Link>
                                </li>
                            </ul>
                        ))}
                    </aside>
                    <main className='content'>
                        <nav>
                            <ul className=''>
                                <div className='navLinks py-5'>
                                    {linksNav.map(({ label, route }) => (
                                        <li key={route}>
                                            <Link href={route}>{label}</Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </nav>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}