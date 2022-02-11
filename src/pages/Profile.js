import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
        document.title = 'Profile';
    }, []);
    
    return (
    <section className="section">
        <h1 className="section-title">Profile page</h1>
        <p className="section-description">Halo namaku Rizkyzet. aku adalah seorang web developer yang baru saja lulus dari harvard.</p>
    </section>
    )
}