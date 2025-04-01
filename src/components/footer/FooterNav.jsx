import React from 'react';

class FooterNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer-nav'>
                <h1>{this.props.header}</h1>
                <ul>
                    {this.props.navigation.map((item, index) => (
                        <li key={index} onClick={item.action}>
                            <a href={item.file} download>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default FooterNav;