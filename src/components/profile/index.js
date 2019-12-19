import React, { Component } from 'react';
import { connect } from 'react-redux';
import strings from '../../data/locale/l10n';

class Profile extends Component {
    render() {
        console.log("profile: ", this.props);
        strings.setLanguage(this.props.selectedLanguage);
        return (
            <div>
                <ul className='profile-items'>
                    <li><h3>{strings.artists}</h3></li>
                    <li><h3>{strings.events}</h3></li>
                    <li><h3>{strings.opportunities}</h3></li>
                    <li><h3>{strings.becomeAnArtist}</h3></li>
                    <li><h3>{strings.signIn}</h3></li>
                    <li><h3>{strings.join}</h3></li>
                </ul>

                <div className='dev-stats'>
                    <h2> Developer Stats </h2>
                    <p>{strings.getLanguage()} - gets the current displayed language</p>
                    <p>{strings.getInterfaceLanguage()} - gets the current device interface language</p>
                    <p>{strings.getAvailableLanguages().toString()} - gets an array of the languages passed in the constructor</p>
                </div>
            </div>


        );
    }
}


const mapStateToProps = (state) => { return state };

export default connect(
    mapStateToProps
)(Profile)
