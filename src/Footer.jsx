const FooterItems = ({ title = "", listItems = [] }) => {
    return (
        <section>
            <h3 className="font-bold text-2xl">{title}</h3>
            <ul>
                {listItems.map((item) => {
                    return <li key={item} className="p-1">{item}</li>
                })}
            </ul>
        </section>
    )
}
export const Footer = () => {
    return (
        <footer className="w-screen bg-black text-white px-12 py-3 flex justify-between items-baseline py-4 fixed bottom-0">
            <div className="flex gap-12">
                <FooterItems title="Abstract" listItems={['Start', 'Pricing', 'Download']} />
                <FooterItems title="Resources" listItems={['Blog', 'Help Center', 'Release Notes', 'Status']} />
                <FooterItems title="Community" listItems={['Twitter', 'LinkedIn', 'Facebook', 'Dribble', 'Podcast']} />
                <FooterItems title="Company" listItems={['About Us', 'Careers', 'Legal']} />
            </div>
            <div className="text-lg">
                <p>
                    © Copyright 2024
                </p>
                <p>
                    Abstract Studio Design, Inc.
                </p>
                <p>
                    All rights reserved
                </p>
            </div>
        </footer>
    )
}
