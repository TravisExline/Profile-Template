import React from 'react'
import NavBar from '../components/NavBar'
import ProfileBanner from '../components/ProfileBanner'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <section>
                    <ProfileBanner />
                </section>
                <section>
                    Sidebar
                </section>
                <section>
                    Feed
                </section>
                <section>
                    Footer?
                </section>
            </div>
        )
    }
}

export default Profile