import React from 'react' 

class ProfileBanner extends React.Component {
    render() {
        return (
            <div>
                <img alt='profile-pictuire'></img>
                <h1>FirstName LastName</h1>
                <p>This is a user biography</p>
            </div>
        )
    }
}

export default ProfileBanner